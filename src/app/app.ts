import { CapsularApp } from "../../../capsular/src/index";
import { Route } from "../../../capsular/src/route";
import { Home } from "./pages/home/home";
import { Intro } from "./pages/intro/intro";
import { Profile } from "./pages/profile/profile";
import { FormTest } from "./pages/form/form";

const routes: Route[] = [
    {
        name: "Home",
        url: "",
        component: Home
    },
    {
        name: "Profile",
        url: "profile",
        component: Profile
    },
    {
        name: "Intro",
        url: "home",
        component: Intro
    },
    {
        name: "Form",
        url: "form",
        component: FormTest
    },
];

export class App implements CapsularApp {
    // TODO find a way to register routes without the contructor
    routes: Route[];
    constructor() {
        this.routes = routes;
    }
}