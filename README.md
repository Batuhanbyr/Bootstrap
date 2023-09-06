# Bootstrap
### My Notes & Projects
>Bootstrap was developed by `Mark Otto` and `Jacob Thornton` at Twitter, and released as an open source product in August 2011 on `GitHub`.

## Resources
1. Bootstrap Docs  [bootstrapdocs](https://getbootstrap.com/docs/5.0)
2. W3Schools [w3](https://www.w3schools.com/bootstrap5/index.php)

## Contents
<a name="contents"></a>
1. Containers [Containers](#Containers)
2. Grid [Grid](#Grid)
3. Typography [Typography](#Typography)
4. Colors [Colors](#Colors)
5. Images [Images](#Images)
6. Buttons [Buttons](#Buttons)
7. Badges [Badges](#Badges)

[back to top](#contents)
## Containers
<a name="Containers"></a>
1. `.container`  responsive fixed width container
2. `.container-fluid`  full width container (width is always 100% )
   
| Class  | Extra small <576px |  Small ≥576px | Medium ≥768px |  Large ≥992px |  Extra large ≥1200px |  XXL ≥1400px | 
| ------------- | ------------- |  -------------  |  ------------- |  ------------- |  ------------- |  ------------- | 
| `.container-sm`  | 100%  | 540px | 720px | 960px | 1140px | 1320px | 
| `.container-md`  | 100%  | 100%  | 720px | 960px | 1140px | 1320px | 
| `.container-lg`  | 100%  | 100%  | 100%  | 960px | 1140px | 1320px | 
| `.container-xl`  | 100%  | 100%  | 100%  | 100%  | 1140px | 1320px | 
| `.container-xxl` | 100%  | 100%  | 100%  | 100%  | 100%  | 1320px | 

```code
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>
```
[back to top](#contents)
## Grid 
<a name="Grid"></a>
1. `.col-` (extra small devices - screen width less than 576px)
2. `.col-sm-` (small devices - screen width equal to or greater than 576px)
3. `.col-md-` (medium devices - screen width equal to or greater than 768px)
4. `.col-lg-` (large devices - screen width equal to or greater than 992px)
5. `.col-xl-` (xlarge devices - screen width equal to or greater than 1200px)
6. `.col-xxl-` (xxlarge devices - screen width equal to or greater than 1400px)
![grid](https://github.com/Batuhanbyr/Bootstrap/assets/95686987/506468de-f5be-4356-98a6-661519872379)

```code
<!-- Control the column width, and how they should appear on different devices -->
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>

<!-- Or let Bootstrap automatically handle the layout -->
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```
[back to top](#contents)
## Typography
<a name="Typography"></a>
- `.h1 to .h6` (bolder font-weight and a responsive font-size)
- `.display-1 to .display-6`  (larger font-size and lighter font-weight)
- `<small>` (used to create a smaller, secondary text in any heading)
- `<mark>` (ellow background color and some padding)
- `<abbr>` (dotted border bottom and a cursor with question mark on hover)
  
[back to top](#contents)
## Colors
<a name="Colors"></a>
1. Text Color Classes 
   1. `text-primary`:  By default, this is a shade of blue, but it can be customized using Bootstrap's theming options.
   2. `text-secondary`:  Like text-primary, this color can be customized.
   3. `text-success`:  typically green, to indicate success or positive messages.
   4. `text-danger`:  typically red, to indicate errors or critical information.
   5. `text-warning`:  typically yellow, to indicate warnings or cautionary messages.
   6. `text-info`: typically a shade of blue, to convey general information.
   7. `text-light`:  for better visibility on dark backgrounds.
   8. `text-dark`:  for better visibility on light backgrounds.
   9. `text-muted`:  for less prominent text, often used for secondary information.
   10. `text-white`:  commonly used for text on dark backgrounds.
   11. `text-black`:  often used for text on light backgrounds.
2. Background Color Classes:
   1. `bg-primary`:  dark blue (it can be customized using Bootstrap's theming options)
   2. `bg-secondary`:  grey (it can be customized using Bootstrap's theming options)
   3. `bg-success`:  typically green
   4. `bg-danger`:  typically red
   5. `bg-warning`:  typically yellow
   6. `bg-info`: typically a shade of blue
   7. `bg-light`:  for use with dark text
   8. `bg-dark`:  for use with light text
   
[back to top](#contents)
## Table
<a name="Table"></a>
1. `.table` class adds basic styling to a table
2. `.table-striped` class adds zebra-stripes to a table
3. `.table-bordered` class adds borders on all sides of the table and cells
4. `.table-borderless` class removes borders from the table:
5. `.table-hover` class adds a hover effect (grey background color) on table rows
6. `.table-dark` class adds a black background to the table:
7. `.table-sm` class makes the table smaller by cutting cell padding in half:
8. `.table-lg` class makes the table smaller by cutting cell padding in half:
9. `.table-responsive` class adds a scrollbar to the table when needed (when it is too big horizontally)
   1. `.table-responsive-sm`	< 576px
   2. `.table-responsive-md`	< 768px
   3. `.table-responsive-lg`	< 992px
   4. `.table-responsive-xl`	< 1200px
   5. `.table-responsive-xxl`	< 1400px

1. Table Color
   1. `.table-primary`	Blue: Indicates an important action
   2. `.table-success`	Green: Indicates a successful or positive action
   3. `.table-danger`	Red: Indicates a dangerous or potentially negative action
   4. `.table-info`	Light blue: Indicates a neutral informative change or action
   5. `.table-warning`	Orange: Indicates a warning that might need attention
   6. `.table-active`	Grey: Applies the hover color to the table row or table cell
   7. `.table-secondary`	Grey: Indicates a slightly less important action
   8. `.table-light`	Light grey table or table row background
   9. `.table-dark`	Dark grey table or table row background
      
[back to top](#contents)  
## Images
<a name="Images"></a>
1. `.rounded` class adds rounded corners to an image:
2.  `.rounded-circle` class shapes the image to a circle:
3.  `.img-thumbnail` class shapes the image to a thumbnail (bordered)
4. Float an image to the left with the `.float-start` class or to the right with `.float-end`
5. Center an image by adding the utility classes `.mx-auto` (margin:auto) and `.d-block` (display:block) to the image
6. Create responsive images by adding an `.img-fluid` class to the <img> tag. The image will then scale nicely to the parent element. The `.img-fluid` class applies max-width: 100%; and height: auto; to the image
   
[back to top](#contents)
## Buttons
<a name="Buttons"></a>

### Basic Button Styles:

1. `.btn`: This is the base class for creating a button. You can add this class to any `<button>`, `<a>`, or `<input>` element to create a styled button.
2. `.btn-primary`: This class gives the button a primary color, typically a shade of blue, which is often used for the most important actions in your application.
3. `.btn-secondary`: This class gives the button a secondary color, typically a different shade of blue. It's often used for secondary actions.
4. `.btn-success`: This class gives the button a success color, typically green, indicating a successful or positive action.
5. `.btn-danger`: This class gives the button a danger color, typically red, indicating a destructive or critical action.
6. `.btn-warning`: This class gives the button a warning color, typically yellow, indicating a warning or cautionary action.
7. `.btn-info`: This class gives the button an informative color, typically a shade of blue, for general information or actions.
8. `.btn-light`: This class gives the button a light background color, often used for buttons on dark backgrounds.
9. `.btn-dark`: This class gives the button a dark background color, often used for buttons on light backgrounds.
10. `.btn-outline-primary`, `.btn-outline-secondary`, and so on: These classes create outlined buttons with the respective color scheme. They are often used for less prominent actions.

### Button Sizes:

1. `.btn-lg`: Makes the button larger in size, suitable for important actions or call-to-action buttons.
2. `.btn-sm`: Makes the button smaller in size, suitable for secondary or less important actions.
3. `.btn-block`: Makes the button span the full width of its parent container.

### Button States:

1. `.active`: Adds an active state to the button, typically used for toggle buttons in button groups.
2. `.disabled`: Disables the button, making it unclickable and visually indicating that it's not available for interaction.

### Button Variations:

1. `.btn-link`: Creates a button that looks like a hyperlink, with no background color and an underlined text style.
2. `.btn-rounded`: Adds rounded corners to the button for a softer appearance.
3. `.btn-floating`: Creates a floating action button (FAB) with a circular shape.
4. `.btn-group`: Used to group buttons together, especially useful for creating button dropdown menus.
5. `.btn-group-vertical`: Similar to .btn-group, but arranges buttons vertically.
6. `.btn-toggle`: Creates a toggle button that can be used to switch between two states, often used in switch-like scenarios.
7. `.btn-toolbar`: Used to group button groups and toolbars together for more complex button layouts.

[back to top](#contents)
## Badges
<a name="Badges"></a>
1. Use the  `.rounded-pill ` class to make the badges more round
2. Use the `.badge` class together with a contextual class (like `.bg-secondary`) within `<span>` elements to create rectangular badges
```code
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning">Warning</span>
<span class="badge bg-info">Info</span>
<span class="badge bg-light">Light</span>
<span class="badge bg-dark">Dark</span>
```
