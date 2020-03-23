import { Div } from "../../../../../capsular/src/dom_elements";
import { Style } from "../../../../../capsular/src/styles";
import { Card, List, NavBar } from "../../../../../capsular/src/custom_elements";

export class Home {
    build() {
        return new Div({
            // check adding variables inside text ${name}
            // content: "test is succes the next step is to make css classes and add styles",
            // style: new Style({
            //     // list down all available css atrributes
            //     height: "100px",
            //     width: "100px",
            //     background: "red"
            // }),
            id: "home-test-div",
            className: "my-div",
            children: [
                new NavBar({
                    navItems: ["home", "profile", "about us", "contact"]
                }),
                new Card({

                }),
                new List({
                    items: [1, 2, 3, 4, 5],
                    builder: (items, i) => {
                        return new Div({
                            content: "This is " + i + " element",
                            style: new Style({
                                padding: "10px",
                                margin: "10px",
                                background: "#1faf87"
                            })
                        })
                    }
                })
            ]
        });
        // return new Card({}); // assing {} in constructor
    }
}