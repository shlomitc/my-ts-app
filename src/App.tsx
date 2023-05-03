import React from "react";
import styles from "./App.module.scss";
import {
  AvatarGroup,
  Avatar,
  Flex,
  Link,
  RadioButton,
  Icon,
  ModalContent,
  Modal,
  ModalFooter,
  Button,
} from "monday-ui-react-core";

import { MoveArrowRight } from "monday-ui-react-core/icons";

/**
 * What do you get from this exercise in Vibe
 * 1. Foundations - typography, colors, spacing
 * 2. Base components - Modal, Avatar (and group), Link, RadioButton
 * 3. Layout components - Flex
 * 4. Assets - Icon
 * 5. Storybook Docs
 * 6. Components types
 *
 * Figma tips
 * 1. Inspector
 * 2. Components Tree
 * 3. Measure spaces between items
 * 4. Links to Storybook
 *
 * 
 * Modal
 * ===========
 * What to use
 * ------------
 * Modal, Modal Content, Modal Footer
 * 
 * Issues
 * ------
 * 1. close button tooltip is broken
 * 2. title is mandatory but type says optional
 * 
 *
 * Description Text
 * ===========
 * What to use
 * ------------
 * CSS Variables
 * 
 * Issues
 * ------
 * 1. No component, must use scss mixin.
 * 2. no storybook documentation for the scss mixins
 * 3. scss mixins names are not the same as the figma one
 * 
 * AvatarGroup
 * ===========
 *    <AvatarGroup size={Avatar?.sizes?.SMALL} max={3}>
 *        {new Array(13).fill(" ").map((_, i) => (
 *          <Avatar
 *            key={i}
 *            type={Avatar?.types?.IMG}
 *            ariaLabel={`name-${i}`}
 *          />
 *        ))}
 *    </AvatarGroup>
 * Issues
 * ------
 * 1. Examples from storybook can't be used out-of-the-box because of images
 * 2. `src` should be mandatory
 * 3. component is partially broken if removing `ariaLabel`
 * 4. contains padding which is incorrect
 * 5. AvatarGroup doesn't have an enum property
 * 6. the +10 dropdown has css issue - spacing is overridden
 *
 * Flex
 * ======
 *
 * Issues
 * ------
 * 1. x-large (32px) gap size is missing
 * 2. gap is not documented
 * 3. default are not good - setting direction column sets alignment to center
 * 4. missing the option to render as a different html element tag (`form`)
 * 5. missing flex-item functionality
 *
 * Custom Section Box
 * ------------------
 * 1. spacing in figma is in numbers and not variables (16px vs. medium)
 *
 *
 * RadioButton
 * ===========
 *
 * Issues
 * ------
 * 1. Missing RadioButtonGroup
 * 2. must use `form` for `defaultCheck` to work
 * 3. RadioGroup is missing
 *
 * Icons
 * =====
 *
 * Issues
 * ------
 * 1. types are not exported. even when trying to use `typeVersions` for older ts verions - it can't find it
 * https://stackoverflow.com/questions/58990498/package-json-exports-field-not-working-with-typescript
 * 2. Icon component makes the component clickable. it should be only focusable
 *
 * Dropdown
 * ========
 *
 * Issues
 * ------
 * 1. the tags version isn't clear in the docs (says multiline, but its tags)
 * 2. types are broken
 *
 * Others
 * ======
 * 1. missing an InfoIcon component
 * 2. Figma doesn't display spacing tokens, only numbers
 */

function App() {
  return (
    <Modal show onClose={() => null} title="Board Permissions" width={'752px' as any}>
      <ModalContent>
        <Flex
          gap={Flex.gaps?.LARGE}
          direction={Flex.directions?.COLUMN}
          align={Flex.align?.STRETCH}
        >
          <Flex>
            <span className={styles.subtitle}>
              Board owners are not restricted by these permissions
            </span>
            <AvatarGroup size={Avatar?.sizes?.SMALL} max={3}>
              {new Array(13).fill(" ").map((_, i) => (
                <Avatar
                  key={i}
                  type={Avatar?.types?.IMG}
                  ariaLabel={`name-${i}`}
                />
              ))}
            </AvatarGroup>
            <Link text="Read more" />
          </Flex>

          <Flex
            gap={Flex.gaps?.MEDIUM}
            direction={Flex.directions?.COLUMN}
            align={Flex.align?.STRETCH}
          >
            <span className={styles.sectionTitle}>Viewing permissions</span>
            <div className={styles.sectionBox}>
              <form
                id="radio-buttons-group-4"
                className={styles.viewPermissionsForm}
              >
                <RadioButton
                  text="View all items on the board"
                  name="radio-buttons-group-4"
                />
                <Flex
                  direction={Flex.directions?.COLUMN}
                  align={Flex.align?.STRETCH}
                >
                  <RadioButton
                    text="View only items that are assigned to users or created by them in a “People” column"
                    name="radio-buttons-group-4"
                    defaultChecked
                  />
                  <Flex
                    className={styles.extenedRadioItem}
                    gap={Flex?.gaps?.MEDIUM}
                  >
                    <Flex style={{ flex: "1 0 auto" }} gap={Flex.gaps?.XS}>
                      <Icon
                        iconType={Icon?.type?.SVG}
                        icon={MoveArrowRight}
                        iconSize={16}
                      />
                      <span className={styles.runningText}>
                        Select the specific columns of <b>items</b>
                      </span>
                    </Flex>
                    <Flex style={{ flex: "1 0 auto" }}>
                      <input style={{ width: "100%" }}></input>
                    </Flex>
                  </Flex>
                </Flex>
              </form>
            </div>
          </Flex>
        </Flex>
      </ModalContent>
      <ModalFooter>
        <Flex gap={Flex.gaps?.MEDIUM} justify={Flex.justify?.END}>
          <Button kind={Button.kinds?.TERTIARY}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
}

export default App;
