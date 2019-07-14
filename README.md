## REACT-VERSION-CONTROL

A version control package developed by [oscmedgon][2] to be used on [React][1] projects.
You can see and test the library at the [demo][3]

This package it's under construction, will be available soon as an npm package

___

#### INSTALATION 
To install the package run the following command
```bash
npm install -S react-version-control
```
___

#### USAGE
The usage of the component is simple,
You need to wrap your application on if, the higher level better, the bet scenario its to wrap your entire app inside it.
      

|       prop       | type       | required | default value | description                                                                                                                                                                                                      |
|------------------|------------|----------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| children         | react node | true     |               | A react node as children to be rendered can be your app component                                                                                                                                                |
| version          | string     | true     | "version"     | Current version depending on your app, recommended to use process.env                                                                                                                                            |
| getLatestVersion | function   | true     |               | A function te be executed in order to get the last version. The function should return a string                                                                                                                  |
| checkVersion     | function   | false    |               | This it's an optional function, bu default version and last version are compared in equity, if you need any special validation this function gets version and las version as arguments and should return boolean |
| renderHotUpdate  | function   | true     |               | Function that returns a react node, it's executed when te manager detects a new update on run time, this way you can create your own notification and styles                                                     |
| debug            | boolean    | false    |               | If debug is true version control will mount some dev enhancers see the dedicated section DEV-ENHANCERS                                                                                                           |
| enabled          | boolean    | false    |               | The module only works if it's enabled, otherwise will only render the children, this can be use for example to test it in determined environments                                                                |

The method renderHotUpdate will receive an argument with type function, this function when executed will force the reload of the page ignoring cache, you can assign this action to a button, so when you click it, the page will start reload.

```jsx harmony
    import VersionControl from 'react-version-control';

    <VersionControl
        getLatestVersion={() => 'latestVersion'}
        version='currentVersion'
        enabled
        debug
        renderHotUpdate={renderUpdateContent}
    >
        <Children />
    </VersionControl>

```

---
##### DEV-ENHANCERS

If you initialize the module with in debug mode this will mount two methods under window.
The module can find updates in two different moments, at the mount point, and at run time.
- Mount point
```js
    window.setLoadUpdate();
```
At mount point when detects an update the app will force refresh of the page ignoring the cache, this will force the browser to download new bundles or assets.

- Run time
```js
    window.setHotUpdate();
```

The method setHotUpdate will force the component to execute the renderUpdateContent method passed by props. 

___

#### TODO
- Add custom time between check possibility.
- Unit Test and demo test.
- Ensure that the version manager does not get stucked in a update loop caused by a app misconfiguration

[1]: https://facebook.github.io/react/
[2]: https://www.omwdesign.eu
[3]: https://versionwatch.devosc.com/