import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
    static get url() {
        return "selectable";
    }

    static gridClick() {
        return cy.get("#demo-tab-grid");
    }

    static items() {
        return cy.get(".list-group-item");
    }
}