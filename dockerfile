# Dockerfile (backend)
FROM ruby:3.2.6

WORKDIR /usr/src/app

# Ensure correct Bundler version
RUN gem uninstall bundler -a -x && gem install bundler -v 2.5.11

# Avoid frozen errors
RUN bundle config --global frozen false

# Install dependencies before copying the entire project (improves caching)
COPY Gemfile ./
COPY Gemfile.lock ./  # ✅ Add this if it's in your repo
RUN bundle install

# Then copy the rest of the app
COPY . .
