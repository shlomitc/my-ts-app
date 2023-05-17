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
  Dropdown,
} from "monday-ui-react-core";

import { MoveArrowRight } from "monday-ui-react-core/icons";

const dropdownOptions = [{value: 'Developer', label: 'Developer'}, {value: 'Designer', label: 'Designer'}];

function App() {
  return (
    <Modal show onClose={() => null} title="Board Permissions" width={'something' as any} zIndex={0}>
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
                    <Flex style={{width: '50%'}} gap={Flex.gaps?.XS}>
                      <Icon
                        iconType={Icon?.type?.SVG}
                        icon={MoveArrowRight}
                        iconSize={16}
                      />
                      <span className={styles.runningText}>
                        Select the specific columns of <b>items</b>
                      </span>
                    </Flex>
                    <div style={{width: '50%'}}>
                      <Dropdown multi defaultValue={dropdownOptions} options={dropdownOptions} insideOverflowContainer/>
                    </div>
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
