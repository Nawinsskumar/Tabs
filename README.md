# Tabs
this code creates a tabbed interface where users can switch between tabs, delete tabs, reset tabs, and navigate between tabs using left and right buttons.

The HTML structure used.

**1.Tab Container (#tabs-container):**
It's a <div> element that contains the tab buttons and navigation buttons.
There are navigation buttons with ← and → symbols for moving tabs left and right.
Inside this container, there's another <div> element (#tabs) that contains the tab buttons (<button> elements).


**2.Tab Content (#content):**
<div> element that contains the content for each tab.
Each tab content is represented by a <div> element with a class of .tab and content an ID (#tab1, #tab2, #tab3).


**3. JavaScript:**
script section containing JavaScript functions for tab functionality.
The openTab() function is responsible for displaying the selected tab and its content.
The deleteContent() function deletes a tab and its content.
The resetContent() function resets all tabs to initial state.
The moveTabs() function moves tabs left or right based on the direction.


**4.Event Handlers:**
Each tab button has an onclick attribute that calls the openTab() function with the tab index.
Each delete button has an onclick attribute that calls the deleteContent() function with the tab index.

**Initialization:**
The openTab(0) function call at the end initializes the first tab to be displayed when the page loads.
