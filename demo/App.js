import VersionControl from '../lib'

export default class App extends React.Component {
    state = {
        formData: {
            version: '',
            lastVersion: '',
            enabled: true,
            debug: true,
        }

    };
    handleChangeInput = ({target: {id, value}}) => {
        this.setState((state) => {
            state.formData[id] = value;
            return state;
        })
    };

    manageCheckbox = ({target: {id, checked}}) => {
        this.setState((state) => {
            state.formData[id] = checked;
            return state;
        })
    };

    handleCheckUpdate = () => {
        const versionController = this.refs['versionController'];
        versionController.handleCheckUpdate(true);
    };

    renderUpdateContent = (update) => (
        <div className='update-container'>
            <h3>Update available</h3>
            <p>
                You are running an outdated version of the app, just click the button to update.
            </p>
            <button onClick={update}>UPDATE NOW</button>
        </div>
    );

    render () {
        const {
            formData: {
                version,
                lastVersion,
                enabled,
                debug
            }
        } = this.state;
        return (
            <VersionControl
                getLatestVersion={() => lastVersion}
                version={version}
                enabled={enabled}
                debug={debug}
                ref='versionController'
                renderHotUpdate={this.renderUpdateContent}
            >
                <div className='version-form'>
                    <h1 className='title'>Version control settings</h1>
                    <p className='title'>
                        To test it just write different versions in the inputs "current" and "latest" and click check update
                    </p>
                    <div className='input-container'>
                        <h3>Current version</h3>
                        <input
                            type="text"
                            id='version'
                            value={version}
                            onChange={this.handleChangeInput}
                            placeholder='Write here...'
                        />
                    </div>
                    <div className='input-container'>
                        <h3>Latest version</h3>
                        <input
                            type="text"
                            id='lastVersion'
                            value={lastVersion}
                            onChange={this.handleChangeInput}
                            placeholder='Write here...'
                        />
                    </div>
                    <div className='input-container'>
                        <h3>Enabled</h3>
                        <input
                            type="checkbox"
                            id='enabled'
                            checked={enabled}
                            onChange={this.manageCheckbox}
                        />
                    </div>
                    <div className='input-container'>
                        <h3>Debug</h3>
                        <input
                            type="checkbox"
                            id='debug'
                            checked={debug}
                            onChange={this.manageCheckbox}
                        />
                    </div>
                    <button onClick={this.handleCheckUpdate} className='check-update'>Check for update</button>
                </div>
            </VersionControl>
        )
    }
}