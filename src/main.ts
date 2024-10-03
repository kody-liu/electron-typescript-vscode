import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.once('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 600,
        height: 400
    });

    const rendererHtmlPath = path.join(`${import.meta.dirname}/../public/renderer.html`);
    win.loadFile(rendererHtmlPath).then(() => {
        // some implementation here
    }).catch(e => console.error(e));
});