# react-snowstorm
![](https://badge.fury.io/js/react-snowstorm.svg)
![](https://david-dm.org/burakcan/react-snowstorm.svg)
![](https://david-dm.org/burakcan/react-snowstorm/dev-status.svg)

A Snow Effect component for React. Uses [Snowstorm](http://www.schillmania.com/projects/snowstorm/) under the hood.

**Live Demo :** [http://burakcan.github.io/react-snowstorm](http://burakcan.github.io/react-snowstorm)

## Getting Started
### Installation

```
$ npm install --save react-snowstorm
```

## Usage
```javascript
import React, { Component } from 'react';
import SnowStorm from 'react-snowstorm';

class MyComponent extends Component {
	render(){
		return (
			<div>
				<SnowStorm />
			</div>
		)
	}
}
```

###### Available Options (props)

* **animationInterval** = (default = 33)
Theoretical "milliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower

* **flakeBottom** = (default = null)
Limits the "floor" (pixels) of the snow. If unspecified, snow will "stick" to the bottom of the browser window and persists through browser resize/scrolling.

* **flakesMax** = (default = 128)
Sets the maximum number of snowflakes that can exist on the screen at any given time.

* **flakesMaxActive** = (default = 64)
Sets the limit of "falling" snowflakes (ie. moving on the screen, thus considered to be active.)

* **followMouse** = (default = true)
Allows snow to move dynamically with the "wind", relative to the mouse's X (left/right) coordinates.

* **freezeOnBlur** = (default = true)
Stops the snow effect when the browser window goes out of focus, eg., user is in another tab. Saves CPU, nicer to user.

* **snowColor** = (default = '#fff')
Don't eat (or use?) yellow snow.

* **snowCharacter** = (default = '•')
&bull; (•) = bullet. &middot; entity (·) is not used as it's square on some systems etc. Changing this may result in cropping of the character and may require flakeWidth/flakeHeight changes, so be careful.

* **snowStick** = (default = true)
Allows the snow to "stick" to the bottom of the window. When off, snow will never sit at the bottom.

* **targetElement** = (default = null)
An HTML element which snow will be appended to (default: document body.) Can be an element ID string eg. 'myDiv', or a DOM node reference. See relative and absolute-positioned examples.

* **useMeltEffect** = (default = true)
When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it

* **useTwinkleEffect** = (default = true)
Allow snow to randomly "flicker" in and out of view while falling

* **usePositionFixed** = (default = false)
true = snow not affected by window scroll. may increase CPU load, disabled by default - if enabled, used only where supported.


* **vMaxY** = (default = 5) and **vMaxX** = (default = 8)
Defines maximum X and Y velocities for the storm; a random value in this range is selected for each snowflake.
