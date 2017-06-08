# mock-api-server
A collection of mock api servers built on and for nodejs.

The primary purpose is to aid front-end development by stubbing out the back end
behind a mock api server.

This repository is organized as follows:
 * Describe the [goals](#goals) and [nice to haves](#nice-to-haves) of the mock-api-server
 * List [candidates](#candidates) for mock-api-server
 * Describe ['real api'](./real-api/) example
 * Describe each candidate
 * Compare Results

## Goals
 * Easy to update
 * Per-Developer configurations
 * Ability to run locally
 * Ability to run on a server (share stub api)
 * Handle mock authentication using JWT

## Nice to haves
 * Ease of keeping in sync w/ real api
 * Handle logic (different responses based on request)

## Candidates
 * [mountebank](./mbtest)
  * [Project Page](http://www.mbtest.org/)
 * [JSON Schema Faker + NodeJS Server](./faker/)
  * [Project Page](http://json-schema-faker.js.org/)
 * [Amazon API Gateway](./api-gateway/)
  * [Amazon Project Overview](https://aws.amazon.com/api-gateway/)
 * [JSON Server](./json-server/)
  * [Github page](https://github.com/typicode/json-server)
