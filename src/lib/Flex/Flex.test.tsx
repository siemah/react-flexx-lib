import React from 'react';
import renderer from 'react-test-renderer';
import Flex from './';
import { JustifyContent, Direction } from './types';

describe('Flex Component:', () => {

  it('Flex is exist(exported)', () => {
    expect(Flex).toBeTruthy();
  });

  it('should Flex component have a flex-block className and accept other classes', () => {

    let component = renderer.create(<Flex />);
    let tree = component.toJSON();
    expect(tree?.props.className).toContain('flex-block');

    const classesList = 'classes-list';// <- classes list passed to Flex
    component = renderer.create(<Flex className={classesList} />);
    tree = component.toJSON();
    expect(tree?.props.className).toContain(classesList);

  });

  it('should Flex component accept justifyContent and direction attributes', () => {

    let component = renderer.create(
      <Flex
        justifyContent={JustifyContent.CENTER}
        direction={Direction.COLUMN}
      />
    );
    let tree = component.toJSON();
    expect(tree?.props.className).toContain(JustifyContent.CENTER);
    expect(tree?.props.className).toContain(Direction.COLUMN);

  });

  it('should Flex accept children', () => {
    
    const component = renderer.create(<Flex>
      <h1>React Flex Block</h1>
    </Flex>);
    const tree = component.toJSON();
    console.log(tree?.children)
    expect(tree?.children).not.toBeFalsy();
    
  });


});
