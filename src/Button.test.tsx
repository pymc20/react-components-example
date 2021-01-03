import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

test("component testing'", () => {
    const buttonProps = {
        style: {background: 'red'},
        title: '버튼',
        onClick: () => console.log('테스트!!')
    }
    const component = renderer.create(<Button {...buttonProps} />);
    const testInstance = component.root;
    expect(testInstance.findByType(Button).props.style).toBe(buttonProps.style);
    expect(testInstance.findByType(Button).props.title).toBe(buttonProps.title);
    expect(testInstance.findByType(Button).props.onClick).toBe(buttonProps.onClick);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});