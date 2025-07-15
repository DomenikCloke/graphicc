FROM ruby:3.2.6

WORKDIR /usr/src/app

RUN gem uninstall bundler && gem install bundler -v 2.5.11
RUN bundle config --global frozen false

COPY Gemfile ./
RUN bundle install

COPY . .
