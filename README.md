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
| version          | string     | true     | null          | Current version depending on your app, recommended to use process.env                                                                                                                                            |
| latestVersion    | string     | true     | null          | Latest available version in string, the fetch should be managed in the host app, you need to pass the raw version string                                                                                         |
| checkVersion     | function   | true     |               | Function executed each iteration where the version manager wants to check an update this function should update the latest and the current version running on the app.                                           |
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
[2]: https://www.devosc.com
[3]: https://versionwatch.devosc.com/
