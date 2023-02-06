# Semantic HTML

## Some semantic Tags

|Tag|DEscription|
|---|-----------|
|`<article>` | Defines independent, self-contained content|
|`<aside>`|	Defines content aside from the page content|
|`<details>`|	Defines additional details that the user can view or hide|
|`<figcaption>`|	Defines a caption for a `<figure>` element|
|`<figure>`|	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.|
|`<footer>`	|Defines a footer for a document or section|
|`<header>`	|Specifies a header for a document or section|
|`<main>`	|Specifies the main content of a document|
|`<mark>`|	Defines marked/highlighted text|
|`<nav>`	|Defines navigation links|
|`<section>`|	Defines a section in a document|
|`<summary>`|	Defines a visible heading for a `<details>` element|
|`<time>`|Defines a date/time|

## `<section>` and `<article>` 

Are conceptually similar and interchangeable. To decide which of these you should choose, take note of the following:

* An article is intended to be independently distributable or reusable.
* A section is a thematic grouping of content.

```html
<section>
  <p>Top Stories</p>
  <section>
    <p>News</p>
    <article>Story 1</article>
    <article>Story 2</article>
    <article>Story 3</article>
  </section>
  <section>
    <p>Sport</p>
    <article>Story 1</article>
    <article>Story 2</article>
    <article>Story 3</article>
  </section>
</section>
```