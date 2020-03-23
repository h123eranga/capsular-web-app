import { startApp } from "../../capsular/src/index";
import { App } from "./app/app";

// TODO limit starting the app several times
startApp(new App());