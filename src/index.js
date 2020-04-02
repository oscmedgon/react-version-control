import React, { Component } from 'react';

/**
 * @param children
 * @param version
 * @param latestVersion
 * @param checkVersion {Function} Callback executed each iteration of the version check to allow the parent to update the latest version.
 * @param renderHotUpdate {Function} When the system detects an update the component will render the result of executing this function passing the children as first argument.
 * @param debug
 * @param enabled
 * @param options {Object}  Options object
 * @param options.timeout {Number} time version checks
 * @returns {*}
 * @constructor
 */
export default class VersionControl extends Component {
    state = {
        initialized: false,
        onLoad: false,
        hotUpdate: false,
        version: null,
        latestVersion: null,
    };

    static getDerivedStateFromProps(props, state) {
        const {version, latestVersion} = props;
        if (version !== state.version || latestVersion !== state.latestVersion) {
            const newConfig = {...state};
            if (!newConfig.initialized) {
                if (version !== undefined && latestVersion !== undefined) {
                    if (version !== latestVersion) {
                        newConfig.onLoad = true;
                    }
                    newConfig.initialized = true;
                }
            } else {
                if (version !== latestVersion) {
                    newConfig.hotUpdate = true;
                }
            }
            newConfig.latestVersion = latestVersion;
            newConfig.version = version;
            return newConfig;
        }
        return null
    }

    manageUpdate = () => {
        window.location.reload(true);
    };

    setDevelopmentEnhancers = () => {
        console.info('--------------------------------');
        console.info('Setting up development enhancers');
        try {
            window.setHotUpdate = () => {this.setState({hotUpdate: !this.state.hotUpdate});};
            window.setLoadUpdate = () => {this.setState({onLoad: !this.state.onLoad});};
            console.info('Enhancers are ready, now you can use this methods to update the state, for more info look at the documentation: https://gitlab.com/oscmedgon/versioncontrol/blob/master/README.md')
            console.table({
                'window.setHotUpdate': 'Set the hot update to true to force show the notification',
                'window.setLoadUpdate': 'Set the onLoad, the version control will automatically update the page'
            })
        } catch (error) {
            console.error('Error setting up development enhancers, this doesn\'t affects to the component standard behaviour, but you can report the error.');
            console.error(error.stack)
        }
    };

    handleCheckUpdate = (force) => {
        if (force) {
            this.props.checkVersion();
        }
        if (this.updateDaemon) {
            clearInterval(this.updateDaemon);
        }
        this.updateDaemon = setInterval(this.props.checkVersion, this.props.timeout);
    };

    componentDidMount() {
        this.setState({ initialized: true });
        if (this.props.debug) {
            this.setDevelopmentEnhancers();
        }
        if (this.props.enabled) {
            this.props.checkVersion();
            this.handleCheckUpdate();
        }

    }

    componentWillUnmount() {
        if (this.updateDaemon) {
            clearInterval(this.updateDaemon);
        }
    }

    render() {
        const {hotUpdate, onLoad} = this.state;
        const {children, enabled, renderHotUpdate} = this.props;

        if (!enabled) {
            return children;
        } else {
            if (onLoad) {
                this.manageUpdate()
            }
            return (
                <React.Fragment>
                    {children}
                    {hotUpdate && renderHotUpdate(this.manageUpdate)}
                </React.Fragment>
            )

        }
    }

    static defaultProps = {
        debug: true,
        enabled: true,
        timeout: 30 * 60 * 1000
    }
}
