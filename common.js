/* Build extensions tables using JSON data */
async function buildExtensionTables(config) {
  buildExtensionTable("build/obv3p0.json", "extensions-obv3p0-table");
  buildExtensionTable("build/obv2p0.json", "extensions-obv2p0-table");
}

async function buildExtensionTable(path, tableId) {
  const { document } = window;
  const response = await fetch(path);
  if (response.status !== 200) {
    throw new Error(`Failed retrieve extensions ${path} file`);
  }
  let extensions = await response.json();
  // transform to array if it's a single object
  if (!Array.isArray(extensions)) {
    extensions = [extensions];
  }

  // summarize each extension
  for (const ext of extensions) {
    const tableRow = document.createElement("tr");
    const {
      name,
      summary,
      extension,
      maintainerEmail,
      maintainerName,
      maintainerWebsite,
    } = ext;
    let maintainerInfo = maintainerName;
    if (maintainerEmail) {
      maintainerInfo += ` (<a href="mailto:${maintainerEmail}">email</a>)`;
    }
    if (maintainerWebsite) {
      maintainerInfo += ` (<a href="${maintainerWebsite}">website</a>)`;
    }
    tableRow.innerHTML =
      `<td style="vertical-align:top;"><a href="${extension}">${name}</a></td>` +
      `<td>${summary}<br/>Maintainer: ${maintainerInfo}</td>`;

    const tableBody = document.getElementById(tableId);
    tableBody.appendChild(tableRow);
  }
}

window.buildExtensionTables = buildExtensionTables;
