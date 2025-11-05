function render_mermaid_diagram(params) {
    const { title, source } = params;
    function htmlEncode(str) {
        return str;
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }


    const encodedSource = htmlEncode(source);

    const htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
<style>
  body {
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  main {
    flex: 1;
    padding: 20px 0;
    background-color: #fafafa;
  }

  .mermaid {
    width: 100%;
    padding: 20px;
    margin-top: 20px;
 }
  #error-log {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #f44336;
    background-color: #ffebee;
    border-radius: 4px;
    width: 100%;
    max-width: 800px;
    display: none;
  }

  #error-log.has-errors {
    display: block;
  }

  header {
    background-color: #f5f5f5;
    padding: 20px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    width: 100%;
  }

  h2 {
    text-align: center;
    margin: 0;
    color: #333;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }

    .mermaid {
      padding: 10px;
    }

    h2 {
      font-size: 1.5rem;
    }

    header {
      padding: 15px 0;
    }

    main {
      padding: 15px 0;
    }
  }
</style>
</head>
<body>
<header>
    <div class="container">
        <h2>${title}</h2>
    </div>
    </header>
    <main>
        <div class="container">
<pre class="mermaid">
${encodedSource}
</pre>
            <div id="error-log">
                <h3>Parse Errors:</h3>
                <pre id="error-content"></pre>
            </div>
        </div>
    </main>
<script type="module">
    import zenuml from 'https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-zenuml@0.2.0/dist/mermaid-zenuml.esm.min.mjs';
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        experimental: true
    });
    // Register ZenUML external diagram plugin
    await mermaid.registerExternalDiagrams([zenuml]);
    await mermaid.registerIconPacks([
        {
            name: 'logos', // Technology and brand logos
            loader: async () => {
                const response = await fetch('https://unpkg.com/@iconify-json/logos@1/icons.json');
                return response.ok ? response.json() : null;
            }
        },
        {
            name: 'simple-icons', // More technology and brand logos
            loader: async () => {
                const response = await fetch('https://unpkg.com/@iconify-json/simple-icons@1/icons.json');
                return response.ok ? response.json() : null;
            }
        },
        {
            name: 'mdi', // Material Design Icons (broad general symbols)
            loader: async () => {
                const response = await fetch('https://unpkg.com/@iconify-json/mdi@1/icons.json');
                return response.ok ? response.json() : null;
            }
        },
        {
            name: 'fa6-solid', // Font Awesome 6 Solid (general symbols)
            loader: async () => {
                const response = await fetch('https://unpkg.com/@iconify-json/fa6-solid@1/icons.json');
                return response.ok ? response.json() : null;
            }
        },
        {
            name: 'fa6-regular', // Font Awesome 6 Regular (outlined general symbols)
            loader: async () => {
                const response = await fetch('https://unpkg.com/@iconify-json/fa6-regular@1/icons.json');
                return response.ok ? response.json() : null;
            }
        },
        {
            name: 'fa6-brands', // Font Awesome 6 Brands (more brand logos)
            loader: async () => {
                const response = await fetch('https://unpkg.com/@iconify-json/fa6-brands@1/icons.json');
                return response.ok ? response.json() : null;
            }
        }
        // Add other specific packs here if needed for niche domains,
        // found via icones.js.org and their unpkg JSON links here
    ]);

mermaid.parseError = function (err, hash) {
    const errorLog = document.getElementById('error-log');
    const errorContent = document.getElementById('error-content');
    
    // Convert err to string if it's an object
    if (typeof err === 'object') {
        errorContent.textContent = JSON.stringify(err, null, 2);
    } else {
        errorContent.textContent = err;
    }
    
    errorLog.classList.add('has-errors');
};
   await mermaid.run();
</script>
</body>
</html>
    `;
    return htmlString;
}
