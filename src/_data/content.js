const header = 'Are we Trusted Publishing yet?';
const footer = `Source on <a href="https://github.com/j4ckofalltrades/arewetrustedpublishingyet">GitHub</a>.`;
const entries = [
  {
    id: 'pub.dev',
    categories: ['pub.dev'],
    color: 'green',
    faicon: 'plus',
    date: '2023-01-19',
    title: 'pub.dev adds support for Trusted Publishing',
    body: `
    <article>
    Blog post excerpt:
    <blockquote>
    Thousands of Dart community members publish packages on pub.dev, for the benefit of all Dart and Flutter developers. Traditionally, these package publishers have published to pub.dev by running a local terminal command, <code>dart pub publish</code>, and authenticating with their Google account. Behind the scenes a <i>refresh token</i> was stored in a configuration file on their development machine, which enabled them to publish a new version without authenticating again. This flow is simple and easy to understand, but requires a number of manual steps. We’re happy to introduce a new automated publishing flow, that enables publishing new pub.dev versions directly from a GitHub Action. This has several benefits:

    <ul>
    <li>Each release is automatically tagged with consistent release tags in GitHub</li>
    <li>It’s easy to configure a review and approval flow for publishing new versions.</li>
    <li>The publishing process is authenticated by a token signed by GitHub, ensuring no credentials have to be stored on disk.</li>
    </ul>
    </blockquote>
    </article>
    `,
    links: [
      {
        href: 'https://blog.dart.dev/screenshots-and-automated-publishing-for-pub-dev-9bceb19edf79',
        linkText: 'Dart Blog: Screenshots and automated publishing for pub.dev',
      },
      {
        href: 'https://dart.dev/tools/pub/automated-publishing',
        linkText: 'Dart Docs: Automated publishing of packages to pub.dev',
      },
    ],
  },
  {
    id: 'pypi',
    categories: ['PyPI'],
    color: 'green',
    faicon: 'plus',
    date: '2023-04-20',
    title: 'PyPI adds support for Trusted Publishing',
    body: `
    <article>
    Blog post excerpt:
    <blockquote>
    "Trusted publishing" is our term for using the OpenID Connect (OIDC) standard to exchange short-lived identity tokens between a trusted third-party service and PyPI.
    This method can be used in automated environments and eliminates the need to use username/password combinations or manually generated API tokens to authenticate with PyPI when publishing.
    </blockquote>
    </article>
    `,
    links: [
      {
        href: 'https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/',
        linkText: 'PyPI Blog: Introducing \'Trusted Publishers\'',
      },
      {
        href: 'https://docs.pypi.org/trusted-publishers/using-a-publisher/',
        linkText: 'PyPI Docs: Publishing with a Trusted Publisher',
      },
    ],
  },
  {
    id: 'rubygems',
    categories: ['RubyGems'],
    color: 'green',
    faicon: 'plus',
    date: '2023-12-14',
    title: 'RubyGems adds support for Trusted Publishing',
    body: `
    <article>
    Blog post excerpt:
    <blockquote>
    Enter the subject of today’s announcement: Trusted Publishing. Before getting into the details, I’d like to quickly thank our friends over at PyPI for blazing this trail, providing helpful guidance, and writing some pretty great docs.
    <p></p>
    Trusted Publishing is a term for using OpenID Connect (OIDC) to exchange short-lived identity tokens between a trusted third-party service and RubyGems.org. This allows obtaining short-lived API tokens in an automated environment (such as CI) without having to store long-lived API tokens or username/password credentials.
    <p></p>
    After filling out four form fields for your gem (repo owner, repo name, GitHub Actions workflow file name, and optional GitHub Environment), you’ll be able to automate publishing via GitHub Actions with a short, simple, and copy/pastable workflow.
    </blockquote>
    </article>
    `,
    links: [
      {
        href: 'https://blog.rubygems.org/2023/12/14/trusted-publishing.html',
        linkText: 'RubyGems Blog: Announcing Trusted Publishing on RubyGems.org',
      },
      {
        href: 'https://guides.rubygems.org/trusted-publishing/',
        linkText: 'RubyGems Guides: Trusted Publishing'
      }
    ],
  },
  {
    id: 'jsr',
    categories: ['JSR'],
    color: 'green',
    faicon: 'plus',
    date: '2024-03-01',
    title: 'JSR (the JavaScript Registry) adds support for Trusted Publishing',
    body:
    `
    Blog post excerpt:
    <blockquote>
    <b>Publishing from GitHub</b>
    <p></p>
    While publishing from the command line is all well and good for trying things out, you’re probably going to want to publish your package from CI. The easiest way to set that up on JSR is linking a GitHub repository.
    In the JSR package <code>Settings</code> UI, configure a GitHub username and repository name where your package source code is stored.
    <p></p>
    ...
    <p></p>
    Publishing this way also gives your users peace of mind that the artifact they’re including in their project was indeed uploaded from CI, with a <a href="https://www.sigstore.dev/how-it-works" target="_blank">provenance transparency log</a>  available for viewing.
    </blockquote>
    `,
    links: [
      {
        href: 'https://deno.com/blog/jsr_open_beta#publishing-from-github',
        linkText: 'Deno Blog: JSR Open Beta - Publishing from GitHub ',
      },
      {
        href: 'https://jsr.io/docs/publishing-packages#publishing-from-github-actions',
        linkText: 'JSR Docs: Publishing from GitHub Actions',
      },
    ],
  },
  {
    id: 'pypi-expanded-publisher-support',
    categories: ['PyPI'],
    color: 'green',
    faicon: 'plus',
    date: '2024-04-17',
    title: 'PyPI expands Trusted Publisher Support',
    body: `
    <article>
    Blog post excerpt:
    <blockquote>
    <p>PyPI package maintainers can publish via Trusted Publishing from three additional providers (in addition to GitHub Actions):</p>
    <ul>
    <li>GitLab CI/CD</li>
    <li>Google Cloud</li>
    <li>ActiveState</li>
    </ul>
    </blockquote>
    `,
    links: [
      {
        href: 'https://blog.pypi.org/posts/2024-04-17-expanding-trusted-publisher-support/',
        linkText: 'PyPI Blog: Expanding Trusted Publisher Support',
      },
    ],
  },
  {
    id: 'crates.io',
    categories: ['crates.io'],
    color: 'green',
    faicon: 'plus',
    date: '2025-07-11',
    title: 'crates.io adds support for Trusted Publishing',
    body:
    `
    <article>
    Blog post excerpt:
    <blockquote>
    We are excited to announce that we have implemented "Trusted Publishing" support on crates.io, as described in <a href="https://rust-lang.github.io/rfcs/3691-trusted-publishing-cratesio.html" target="_blank">RFC #3691</a>. This feature was inspired by the PyPI team's excellent work in this area, and we want to thank them for the inspiration!
    <p></p>
    Trusted Publishing eliminates the need for GitHub Actions secrets when publishing crates from your CI/CD pipeline. Instead of managing API tokens, you can now configure which GitHub repository you trust directly on crates.io. That repository is then allowed to request a short-lived API token for publishing in a secure way using OpenID Connect (OIDC). While Trusted Publishing is currently limited to GitHub Actions, we have built it in a way that allows other CI/CD providers like GitLab CI to be supported in the future.
    </blockquote>
    </article>
    `,
    links: [
      {
        href: 'https://blog.rust-lang.org/2025/07/11/crates-io-development-update-2025-07/#trusted-publishing',
        linkText: 'Rust Blog: crates.io: development update',
      },
      {
        href: 'https://crates.io/docs/trusted-publishing',
        linkText: 'Rust Package Registry Docs: Trusted Publishing',
      }
    ],
  },
  {
    id: 'npm',
    categories: ['npm'],
    color: 'green',
    faicon: 'plus',
    date: '2025-07-31',
    title: 'npm adds support for Trusted Publishing',
    body:
    `
    <article>
    Blog post excerpt:
    <blockquote>
    With trusted publishing, you can now:
    <p></p>
    <ul>
    <li><b>Publish packages without npm tokens</b>: Configure your packages to accept publishes from specific GitHub Actions or GitLab CI/CD workflows using OIDC authentication.</li>
    <li><b>Eliminate token security risks</b>: No more storing, rotating, or accidentally exposing npm tokens in your CI/CD environments.</li>
    <li><b>Establish cryptographic trust</b>: Each publish is authenticated using short-lived, workflow-specific credentials that cannot be exfiltrated or reused.</li>
    <li><b>Get automatic provenance</b>: When using trusted publishing, npm CLI publishes provenance attestations by default. The <code>--provenance</code> flag is no longer needed.</li>
    </ul>
    </blockquote>
    </article>
    `,
    links: [
      {
        href: 'https://github.blog/changelog/2025-07-31-npm-trusted-publishing-with-oidc-is-generally-available/',
        linkText: 'GitHub Blog: npm trusted publishing with oidc is generally available',
      },
      {
        href: 'https://docs.npmjs.com/trusted-publishers',
        linkText: 'npm Docs: Trusted publishing for npm packages',
      },
    ],
  },
  {
    id: 'nuget',
    categories: ['NuGet'],
    color: 'green',
    faicon: 'plus',
    date: '2025-09-17',
    title: 'NuGet adds support for Trusted Publishing',
    body:
    `
    <article>
    Blog post excerpt:
    <blockquote>
    Trusted Publishing is a better way to publish NuGet packages. You don’t need to manage long-lived API keys anymore. Instead, you use short-lived credentials issued by your CI/CD system, like GitHub Actions.
    <p></p>
    This makes your publishing process safer by reducing the risk of leaked credentials. It also makes automation easier because you don’t need to rotate or store secrets. This approach is part of a broader industry shift toward secure, keyless publishing. If you're curious, check out the <a href="https://repos.openssf.org/trusted-publishers-for-all-package-repositories" target="_blank">OpenSSF initiative</a>.
    </blockquote>
    </article>
    `,
    links: [
      {
        href: 'https://learn.microsoft.com/en-us/nuget/nuget-org/trusted-publishing',
        linkText: 'Microsoft Learn: Trusted Publishing on nuget.org',
      },
    ],
  },
];

// Page details
const pageTitle = 'Are we Trusted Publishing yet?';
const pageDescription = 'A timeline that lists package registries that support Trusted Publishing and when it was added. ';
const pageAuthor = 'Jordan Duabe';
const showMirrorLinks = false;

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return [...new Set(filtersArray)];
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
