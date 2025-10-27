const header = 'Are we Trusted Publishing yet?';
const footer = `Source on <a href="https://github.com/j4ckofalltrades/arewetrustedpublishingyet">GitHub</a>.`;
const entries = [
  {
    id: 'pub.dev',
    categories: ['pub.dev'],
    color: 'green',
    faicon: 'plus',
    date: '2023-01-19',
    title: 'Automated publishing of packages to pub.dev',
    body: `
    <br/>
    <p>
      pub.dev adds support for <i>automated publishing</i> which supports publishing from the following sources: GitHub Actions, Google Cloud Build, anywhere else using a GCP service account.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    title: 'PyPI introduces Trusted Publishing',
    body: `
    <br/>
    <p>
      PyPI coins the term 'Trusted Publishing' with support for packages published through GitHub Actions.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    <br/>
    <p>
      RubyGems adds support for Trusted Publishing for packages published through GitHub Actions.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    <br/>
    <p>
      JSR adds support for Trusted Publishing for packages published through GitHub Actions.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    <br/>
    <p>
      PyPI adds support for publishing packages through three additional providers: GitLab CI/CD, Google Cloud, and ActiveState.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    <br/>
    <p>
      crates.io adds support for Trusted Publishing for packages published through GitHub Actions.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    <br/>
    <p>
      npm adds support for Trusted Publishing for packages published through GitHub Actions and GitLab CI/CD.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
    id: 'private-packagist',
    categories: ['Private Packagist'],
    color: 'green',
    faicon: 'plus',
    date: '2025-09-09',
    title: 'Private Packagist adds support for Trusted Publishing',
    body:
      `
    <br/>
    <p>
      Private Packagist adds support for Trusted Publishing for packages published through GitHub Actions.
    </p>
    <br/>
    <span><i>Source:</i></span>
    `,
    links: [
      {
        href: 'https://packagist.com/docs/api/trusted-publishing',
        linkText: 'Private Packagist docs: Trusted Publishing for artifact packages',
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
    <br/>
    <p>
      nuget.org adds support for Trusted Publishing for packages published through GitHub Actions and GitLab CI/CD.
    </p>
    <br/>
    <span><i>Source:</i></span>
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
const pageDescription = 'A timeline that lists package registries that support Trusted Publishing and when it was added.';
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
