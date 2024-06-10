# Minyan Dafna website

This Jekyll-based website is based off of [agency-jekyll-theme](https://github.com/raviriley/agency-jekyll-theme).

## Local development

To work on the website locally, install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Then, run

    git clone https://github.com/minyandafna/minyandafna.github.io
    cd minyandafna.github.io
    bundle install

This will download the website and install dependencies. To view a live preview, run

    bundle exec jekyll serve --trace

This should allow you to view the website at [http://localhost:4000](http://localhost:4000).

## File structure

All of the main website content can be edited in [`_data/sitetext.yml`](_data/sitetext.yml) and [`_data/navigation.yml`](_data/navigation.yml). Some options are also in [`_config.yml`](_config.yml); after these are changed the development server needs to be restarted to see the effects. When changing content not in `_config.yml` only a browser refresh is needed.
