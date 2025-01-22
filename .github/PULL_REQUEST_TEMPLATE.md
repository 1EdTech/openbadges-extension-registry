# Instructions for Pull Requests

Please read these instructions thoroughly in order to ensure that your pull request is processed in a timely manner. This document contains detailed instructions for adding your extension to the registry. If your pull request concerns some other change to the repository, you may delete all of the text in this text box and write up a more relevant description.

Once you submit your request, your pull request will be reviewed by the registry maintainers. Changes regarding the required criteria may be requested. If there are no objections or changes requested, your entry will be merged after a minimum of 7 days and a maximum of 30 days.

## Adding Your Extension

In order to add your extension to this registry, you must add a JSON file to the [./v2](./v2) or [./v3](./v3) directory,
whether your extension is is for [Open Badges 2.0](https://www.imsglobal.org/spec/ob/v2p0/) or
[Open Badges 3.0](https://www.imsglobal.org/spec/ob/v3p0/).

Here is an example extension entry:

```jsonc
{
  // These fields are required
  "name": "Example Extension",
  "summary": "Used to add example data to Open Badges 3.0",
  "extension": "https://example.github.io/example-extension/",
  "maintainerName": "Example Community Group",
  // These fields are optional
  "maintainerEmail": "maintainer@community.example",
  "maintainerWebsite": "https://example.github.io/"
}
```

Your Pull Request will be automatically validated, please ensure that all of the automated tests pass (no errors reported) or your submission will not be reviewed. Common reasons for failed validation includes invalidly formatted JSON files and missing mandatory fields.