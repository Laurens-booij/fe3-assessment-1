# [Bar chart][project]
## Description
Bar chart based on [Block 6476579][block] by [Justin Palmer][author]. Check out the project [here][project].

## Background
The file types that are included are:
* HTML
* Css
* js
* tsv

## Changes
I have made changes to the html, css and JavaScript files. The changes are listed below:

### index.html
* Moved javascript and css into separate files.
* Linked to javascript and css files.
* Changed loaded d3 link from v3 to v4.

### index.css
* Removed tooltip styling.

### index.js
* Skewed the labels, so they don't overlap.
* Changed margins in order to make everything fit.
* Updated `d3` from `v3` to `v4`
* Changed `.attr("width", x.bandwidth())'` to `.attr("width", x.bandwidth() - 1)` in order to create a gap between the bars.
* Removed tooltip related stuff, because this wasn't compatible with `v4` of `d3`.
* Removed percentages from value labels on y axis.
* Added animation to bars.
* Made it so that bars have different colors.

## Data
Data about the number of people who speak given languages. Loaded from a `.tsv` file.

## License
GPL-3.0 © Laurens Booij

No license from orginal author.

[author]:https://bl.ocks.org/Caged
[block]: http://bl.ocks.org/Caged/6476579
[project]: https://laurens-booij.github.io/fe3-assessment-1/

