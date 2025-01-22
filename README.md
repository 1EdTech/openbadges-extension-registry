# Registry of Open Badges extensions

## Adding your extension

1. Fork this repository.
2. Create a new branch.
3. Add a new JSON file with your extension's name in either the `v2` or `v3`
format, whether your extension is for
[Open Badges 2.0](https://www.imsglobal.org/spec/ob/v2p0/) or
[Open Badges 3.0](https://www.imsglobal.org/spec/ob/v3p0/).
The contents of the file MUST follow the Extension Format. See an here below.
4. Make a PR to the main branch of this repository.

## Example Extension Entry

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
