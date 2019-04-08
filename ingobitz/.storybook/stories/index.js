import React  from 'react';
import {storiesOf}  from '@storybook/react';

import CalendarDot from '../../src/index.js';
import CustomButton from '../../src/button.js';
storiesOf("components", module)
.addWithJSX("calendar dot", () => <CalendarDot />);
storiesOf("components", module)
.addWithJSX("button", () => <CustomButton />);