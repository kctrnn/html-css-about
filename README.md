# HTML Tree of About Page

**MAIN LAYOUT**

```
body
    header
        section.top-bar
        nav.top-nav

    main
        section.hero
        section.about
        section.facts

    footer
```

- header + footer + hero are shared across pages.

## Section - TOP-BAR

```
section.top-bar
    container
        row justify-content-between
            col-auto
                ul.top-bar__social-list
                    li * 4 > a > i

            col-auto
                div.top-bar__links
                    a (Login)
                    span (/)
                    a (Register)
```

## Section - TOP-NAV

```
nav.top-nav
    container top-nav__inner
        a.logo
            img

        div.top-nav__toggle
            i (icon fas fa-bars)

        ul.menu
            li * 5 > a

        div.top-nav__search
            a > i (icon fa fa-search)
```

## Section - HERO

```
section.hero
    container-fluid
        h1.hero__title
```

## Section - ABOUT

```
section.about
    container
        row
            col
                div.about__content
                    h1.about__title
                    p.about__discription
                    a.about__read-more

            col
                img.about__image
```

## Section - FACTS

```
section.facts
    container
        row
            col-sm-6 col-lg-3 * 4
                div.facts-item
                    img.facts-item__image
                    p.facts-item__big-number
                    p.facts-item__name
```

## FOOTER

```
footer.footer
    container
        row
            col
                a.logo
                    img
                ul.footer__social-list
                    li * 4 > a > i

            col
                ul.footer__menu
                p.footer__copyright

```
