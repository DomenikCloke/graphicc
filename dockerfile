FROM ruby:3.2.6

WORKDIR /usr/src/app

# Desinstalar la versión existente de bundler e instalar la versión específica
RUN gem uninstall bundler && gem install bundler -v 2.5.11


# Desactivar el modo frozen
RUN bundle config --global frozen false

COPY Gemfile ./
RUN bundle install


COPY . .


