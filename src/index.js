import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param children
 * @param version
 * @param getLatestVersion
 * @param checkVersion {Function} In you need an special validation pass a function that returns boolean.
 * @param renderHotUpdate {Function} When the system detects an update the component will render the result of executing this function passing the children as first argument.
 * @param debug
 * @param enabled
 * @returns {*}
 * @constructor
 */
export default class VersionControl extends Component {
    constructor(props) {
        super(props);
        const {version, debug = true, enabled = true, getLatestVersion = Function, checkVersion} = props;
        const state = {
            version,
            debug,
            enabled,
            onLoad: false,
            hotUpdate: false,
            disabled: false
        };
        if (enabled) {
            const lastVersion = getLatestVersion();
            let updated = true;
            if (checkVersion && typeof checkVersion === 'function') {
                updated = checkVersion(version, lastVersion);
                if (typeof updated !== 'boolean') {
                    const error = new Error(`Function checkVersion should return boolean but returned ${typeof updated}`);
                    throw error.stack;
                }
            } else {
                updated = version === lastVersion;
            }
            if (!updated) {
                if (debug) {
                    console.table({
                        oldVersion: version,
                        newVersion: lastVersion,
                        message: 'New version detected at the first load proceeding to reload the page.'
                    })
                }
                state.onLoad = true;
            }
        }
        if (debug) {
            this.setDevelopmentEnhancers();
        }
        this.state = state;
    }

    componentDidMount() {
        this.handleCheckUpdate();
    }

    componentWillReceiveProps({debug, enabled, version}) {
        const newState = {};
        if (debug !== this.props.debug) {
            newState.debug = debug;
        }
        if (enabled !== this.props.enabled) {
            newState.enabled = enabled;
        }
        if (version !== this.props.version) {
            newState.version = version;
        }
        this.setState((state) => {
            return {...state, ...newState};
        });
    }

    componentWillUnmount() {
        if (this.updateDaemon) {
            clearTimeout(this.updateDaemon);
        }
    }

    handleCheckUpdate = (force) => {
        if (force) {
            this.timeoutCallback();
        }
        if (this.updateDaemon) {
            clearTimeout(this.updateDaemon);
        }
        const time = 30 * 60 * 1000;
        this.updateDaemon = setTimeout(this.timeoutCallback, time);
    };



    timeoutCallback = () => {
        const {version} = this.state;
        const {getLatestVersion, checkVersion} = this.props;
        const lastVersion = getLatestVersion();
        let updated = true;
        if (checkVersion && typeof checkVersion === 'function') {
            updated = checkVersion(version, lastVersion);
            if (typeof updated !== 'boolean') {
                const error = new Error(`Function checkVersion should return boolean but returned ${typeof updated}`);
                throw error.stack;
            }
        } else {
            updated = version === lastVersion;
        }
        if (!updated) {
            if (debug) {
                console.table({
                    oldVersion: version,
                    newVersion: lastVersion,
                    message: 'New version detected when the app it\'s already mounted.'
                })
            }
            this.setState((state) => {
                state.hotUpdate = true;
                return state;
            })
        }
    };



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
    render() {
        const {hotUpdate, enabled, onLoad} = this.state;
        const {children, renderHotUpdate} = this.props;
        if (!enabled) {
            return children;
        } else {
            if (onLoad) {
                this.manageUpdate()
            } else if (hotUpdate) {
                return (
                    <React.Fragment>
                        {children}
                        {renderHotUpdate(this.manageUpdate)}
                    </React.Fragment>
                )
            } else {
                return children;
            }

        }
    }
    static propTypes = {
        children: PropTypes.node.isRequired,
        version: PropTypes.string.isRequired,
        getLatestVersion: PropTypes.func.isRequired,
        checkVersion: PropTypes.func,
        renderHotUpdate: PropTypes.func.isRequired,
        debug: PropTypes.bool,
        enabled: PropTypes.bool
    };

    static defaultProps = {
        version: 'version',
        getLatestVersion: () => 'version',
        renderHotUpdate: (children) => (<div className='version-control'>{children}<h1>Update available</h1></div>)
    };
}