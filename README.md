# IT Puerto Rico

Static website for **www.itpuertorico.com**, built with HTML, CSS, and a small amount of JavaScript. No build step or package installation is required.

## Preview locally

From the repository directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765 in your browser.

## Editing

- The eight HTML pages contain the content and accessible navigation/footer markup.
- `assets/site.css` provides shared responsive styling.
- `assets/site.js` handles the mobile menu, footer year, and service-specific email subject.
- `assets/office.webp` is a still extracted from the existing `background2.mp4`; the homepage does not autoplay or download the video.
- Existing product illustrations and business facts were retained from the original site. Manufacturer names describe available products, not certified partnerships.
- Phone and email actions open the visitor’s dialer/email application. There is no contact form backend.
- SOS links download the existing Splashtop tools. The site does not initiate remote sessions.
- Privacy and terms text is unchanged; only its presentation was updated.

Navigation remains available when JavaScript is disabled. Mobile navigation supports Escape and exposes its expanded state to assistive technology. Motion preferences are respected.

## Publishing

Review and merge the redesign pull request into the branch configured for GitHub Pages. Confirm the repository’s **Settings → Pages** publishing source before merging, then verify the resulting Pages deployment and custom domain. The redesign does not change Pages settings or domain files.

The existing repository contains both `CNAME` and `cname`, which collide on case-insensitive filesystems such as default macOS. A clone may report one as modified due to a newline difference. Do not include that unrelated change in a redesign commit.
