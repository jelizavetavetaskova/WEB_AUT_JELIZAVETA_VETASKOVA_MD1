import { SelectablePage } from "../../pageObjects/selectablePage";

describe("DEMO QA", () => {
    context("Grid tests", () => {
        beforeEach(() => {
            SelectablePage.visit();
        });

        it("Click on list items", () => {
            SelectablePage.visit();
            SelectablePage.gridClick().click();
            SelectablePage.items().contains("Two").click();
            SelectablePage.items().contains("Four").click();
            SelectablePage.items().contains("Six").click();
            SelectablePage.items().contains("Eight").click();

            SelectablePage.items().contains("Two").should("have.class", "active");
            SelectablePage.items().contains("Four").should("have.class", "active");
            SelectablePage.items().contains("Six").should("have.class", "active");
            SelectablePage.items().contains("Eight").should("have.class", "active");

            SelectablePage.items().contains("One").should("not.have.class", "active");
            SelectablePage.items().contains("Three").should("not.have.class", "active");
            SelectablePage.items().contains("Five").should("not.have.class", "active");
            SelectablePage.items().contains("Seven").should("not.have.class", "active");
            SelectablePage.items().contains("Nine").should("not.have.class", "active");
        })
    })
})