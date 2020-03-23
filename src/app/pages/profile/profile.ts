import { Table, Tr, Td, } from "../../../../../capsular/src/dom_elements";

export class Profile {
    build() {
        return new Table({
            children: [
                new Tr({
                    children: [
                        new Td({
                            content: "Cell 1"
                        })
                    ]
                }),
                new Tr({
                    children: [
                        new Td({
                            content: "Cell 2"
                        })
                    ]
                }),
                new Tr({
                    children: [
                        new Td({
                            content: "Cell 3"
                        })
                    ]
                })
            ]
        });
    }
}