import { List, NavBar } from "../../../../../capsular/src/custom_elements";
import { Div } from "../../../../../capsular/src/dom_elements";
import { Style } from "../../../../../capsular/src/styles";

export class Intro {
    items: any[] = [
        {
            title: "What is Capsular?",
            description: "Capsular is a Web Framework designed in TypeScript to develop single page web applications. The most popolar programming concept OOP is used to build an application in MVC architecture with single files. All the web components could have one .ts file which contains HTML, CSS and TypeScript."
        },
        {
            title: "How to use Capsular?",
            description: "Capsular CLI generates the empty sample app for you. Create web page components and add the routes according to the preference. Each .ts file which displays a temple should have the \"builder\" method to generate the HTML content."
        },
        {
            title: "Is it worth use the framework for development?",
            description: "Capsular supports many options to build web applications. Developers can keep View, Model, Control in single file and can use the same OOP concept in phase in the development. Capsular will save your development time and time spending on issue fixes. Capsular helps a lot on development because of maintaining HTMl, CSS, TypeScript in similar pattern."
        }
    ]
    constructor() {

    }
    build() {
        return new Div({
            children: [
                new List({
                    items: this.items,
                    builder: (items, i) => {
                        return new Div({
                            style: new Style({
                                margin: "10px 0px",
                            }),
                            children: [
                                new Div({
                                    content: items[i].title,
                                    style: new Style({
                                        background: "#1faf87",
                                        padding: "10px"
                                    })
                                }),
                                new Div({
                                    content: items[i].description,
                                    style: new Style({
                                        background: "#efefef",
                                        padding: "10px"
                                    })
                                })
                            ]
                        })
                    }
                }),
                new Div({
                    style: new Style({
                        background: "#1faf87",
                        textAlign: "center",
                        padding: "10px",
                        margin: "10px 0px"
                    }),
                    content: "Powered by Capsular ©2020. Code licensed under an MIT License. Version: demo.1.0.0"
                })
            ]
        });
    }
}