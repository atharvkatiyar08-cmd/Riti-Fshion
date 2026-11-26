const BUSINESS_CONTACT = {
  phones: ["6354759740"],
  emails: ["ritifashion.surat@gmail.com"],
  whatsapp: "6354759740",
  address: "G 60, Shree Kuberji World, Saroli Road, Surat – 395010, Gujarat, India",
};

const WHATSAPP_INTRO =
  "Hello RITI FASHION, I am interested in your garment manufacturing services. I would like to discuss my production requirements.";

// Public catalogue source. Future dashboard/API integration should replace this
// array or expose the same schema as window.RITI_SAMPLE_EDIT.
const SAMPLE_EDIT_CATALOGUE = {
  schemaVersion: 3,
  items: []
};
window.RITI_SAMPLE_EDIT = SAMPLE_EDIT_CATALOGUE;

const pageLinks = [
  ["Home", "index.html", "home"],
  ["Services", "services.html", "services"],
  ["Learn More", "learnmore.html", "learnmore"],
  ["Manufacturing Details", "manufacturing-details.html", "manufacturing-details"],
  ["Garment Categories", "portfolio.html", "portfolio"],
  ["Sample Edit", "sample-edit.html", "sample-edit"],
  ["Process", "process.html", "process"],
  ["About", "about.html", "about"],
  ["Contact", "contact.html", "contact"],
];

const phoneDigits = (phone) => phone.replace(/\D/g, "");
const whatsappDigits = () => {
  const digits = phoneDigits(BUSINESS_CONTACT.whatsapp);
  return digits.length === 10 ? `91${digits}` : digits;
};
const whatsappUrl = (message = "") =>
  `https://wa.me/${whatsappDigits()}?text=${encodeURIComponent(message || WHATSAPP_INTRO)}`;
const formatPhone = (phone) => {
  const digits = phoneDigits(phone);
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
};

const makeContactLink = (label, href, className = "") => {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = href;
  if (className) {
    link.className = className;
  }
  return link;
};

const renderContactLinks = (container, values, scheme, formatter = (value) => value) => {
  if (!container) {
    return;
  }
  container.replaceChildren();
  values.forEach((value) => {
    const digits = phoneDigits(value);
    const destination = scheme === "tel" ? (digits.length === 10 ? `+91${digits}` : `+${digits}`) : value;
    const subject = scheme === "mailto" ? `?subject=${encodeURIComponent("Manufacturing Enquiry – RITI FASHION")}` : "";
    container.append(makeContactLink(formatter(value), `${scheme}:${destination}${subject}`));
  });
};

const headerRoot = document.querySelector("#site-header");
if (headerRoot) {
  headerRoot.innerHTML = `
    <div class="announcement"><span>RITI FASHION · GARMENT MANUFACTURING &amp; STITCHING JOB WORK</span><span class="announcement-note">Surat, Gujarat, India</span></div>
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="RITI FASHION home"><img class="brand-logo" src="assets/brand/riti-fashion-logo-display.jpeg" alt="RITI FASHION — From Design to Delivery"></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="menu-icon" aria-hidden="true"></span><span class="sr-only">Open navigation</span></button>
      <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
        ${pageLinks.map(([label, href, key]) => `<a href="${href}"${document.body.dataset.page === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
        <a class="nav-cta" href="index.html#enquiry">Request a Quote <span aria-hidden="true">↗</span></a>
        <a class="nav-whatsapp" data-whatsapp-link href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
      </nav>
    </header>`;
}

const footerRoot = document.querySelector("#site-footer");
if (footerRoot) {
  footerRoot.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand-column">
          <a class="brand footer-brand" href="index.html" aria-label="RITI FASHION home"><img class="brand-logo" src="assets/brand/riti-fashion-logo-display.jpeg" alt="RITI FASHION — From Design to Delivery"></a>
          <p>Garment manufacturing and stitching job work from Surat, India. International delivery can be arranged by direct agreement.</p>
        </div>
        <div class="footer-column"><h2>Explore</h2><a href="index.html">Home</a><a href="sample-edit.html">The RITI Sample Edit</a><a href="services.html">Services</a><a href="learnmore.html">Learn About Our Services</a><a href="manufacturing-details.html">Manufacturing Details</a><a href="portfolio.html">Garment Categories</a><a href="process.html">Manufacturing Process</a><a href="about.html">About RITI FASHION</a><a href="contact.html">Contact</a><a href="privacy.html">Privacy Policy</a></div>
        <div class="footer-column"><h2>Contact</h2><div class="footer-contact-list" id="footer-phones"></div><div class="footer-contact-list" id="footer-emails"></div><a data-whatsapp-link href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a class="footer-address" href="https://maps.google.com/?q=G+60%2C+Shree+Kuberji+World%2C+Saroli+Road%2C+Surat+395010%2C+Gujarat%2C+India" target="_blank" rel="noopener noreferrer">${BUSINESS_CONTACT.address}</a></div>
      </div>
      <div class="footer-bottom"><span>© <span id="year"></span> RITI FASHION</span><span>Garment Manufacturing · Surat, India · International delivery by direct agreement</span><a href="#main">Back to top ↑</a></div>
      <p class="footer-image-disclosure">Editorial photographs are used for illustrative purposes. They do not represent RITI FASHION's actual products, facilities, staff or completed work unless clearly identified otherwise.</p>
      <p class="footer-delivery-note">Delivery arrangements are subject to direct agreement.</p>
    </footer>`;
}

if (!document.querySelector(".mobile-contact-bar")) {
  const mobileBar = document.createElement("div");
  mobileBar.className = "mobile-contact-bar";
  mobileBar.setAttribute("aria-label", "Quick contact");
  mobileBar.innerHTML = `
    <a data-phone-link href="tel:+916354759740">Call</a>
    <a data-whatsapp-link href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a href="index.html#enquiry">Request a Quote</a>`;
  document.body.append(mobileBar);
}

renderContactLinks(document.querySelector("#footer-phones"), BUSINESS_CONTACT.phones, "tel", formatPhone);
renderContactLinks(document.querySelector("#footer-emails"), BUSINESS_CONTACT.emails, "mailto");
renderContactLinks(document.querySelector("#contact-phones"), BUSINESS_CONTACT.phones, "tel", formatPhone);
renderContactLinks(document.querySelector("#contact-emails"), BUSINESS_CONTACT.emails, "mailto");

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappUrl(link.dataset.whatsappMessage || "");
});
document.querySelectorAll("[data-phone-link]").forEach((link) => {
  const phone = BUSINESS_CONTACT.phones[0];
  if (phone) {
    const digits = phoneDigits(phone);
    link.href = `tel:${digits.length === 10 ? `+91${digits}` : `+${digits}`}`;
    if (link.textContent.trim() === "") {
      link.textContent = formatPhone(phone);
    }
  }
});

const yearLabel = document.querySelector("#year");
if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear().toString();
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealTargets = document.querySelectorAll(
    ".hero-copy, .hero-visual, .intro-layout, .section-heading, .service-card, .process-strip, " +
    ".portfolio-preview-grid, .faq-list, .enquiry-copy, .enquiry-form, .sample-edit-section, " +
    ".manufacturing-journey-grid, .timeline, .service-detail-card, .story-section, " +
    ".sample-page-heading, .sample-page-grid, .sample-page-note, .learnmore-contents, " +
    ".learnmore-service, .learnmore-final-cta, .details-layout, .privacy-content"
  );
  revealTargets.forEach((element) => element.classList.add("reveal-on-scroll"));
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-revealed"));
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
    menuToggle.querySelector(".sr-only").textContent = "Open navigation";
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
    menuToggle.querySelector(".sr-only").textContent = isOpen ? "Open navigation" : "Close navigation";
  });
  primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("pointerdown", (event) => {
    if (
      menuToggle.getAttribute("aria-expanded") === "true" &&
      event.target instanceof Node &&
      !primaryNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 781px)").matches) {
      closeMenu();
    }
  });
}

const header = document.querySelector(".site-header");
if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const enquiryEndpoint = document.querySelector('meta[name="riti-enquiry-endpoint"]')?.content.trim() || "";
const turnstileSiteKey = document.querySelector('meta[name="riti-turnstile-site-key"]')?.content.trim() || "";
let turnstileScriptPromise;

const loadTurnstile = () => {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }
  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => window.turnstile ? resolve(window.turnstile) : reject(new Error("Verification could not be initialized."));
      script.onerror = () => reject(new Error("The spam-verification service could not be loaded."));
      document.head.append(script);
    });
  }
  return turnstileScriptPromise;
};

const serviceOptions = {
  "stitching-job-work": "Stitching job work",
  "bulk-garment-stitching": "Bulk garment stitching",
  "mens-wear-manufacturing": "Men's wear manufacturing",
  "womens-wear-manufacturing": "Women's wear manufacturing",
  "complete-garment-manufacturing": "Complete garment manufacturing",
  "pattern-sample-development": "Pattern or sample development",
  "sample-availability-enquiry": "Sample availability enquiry",
};

document.querySelectorAll("[data-enquiry-form]").forEach((enquiryForm) => {
  if (!(enquiryForm instanceof HTMLFormElement)) {
    return;
  }

  const serviceField = enquiryForm.querySelector('[name="service"]');
  const query = new URLSearchParams(window.location.search);
  const requestedService = query.get("service");
  if (serviceField instanceof HTMLSelectElement && requestedService && serviceOptions[requestedService]) {
    serviceField.value = serviceOptions[requestedService];
  }
  if (query.get("enquiry") === "sample") {
    const categoryField = enquiryForm.querySelector('[name="category"]');
    const quantityField = enquiryForm.querySelector('[name="quantity"]');
    const designField = enquiryForm.querySelector('[name="design"]');
    const requirementsField = enquiryForm.querySelector('[name="requirements"]');
    if (categoryField instanceof HTMLSelectElement) {
      categoryField.value = "Physical sample enquiry";
    }
    if (serviceField instanceof HTMLSelectElement) {
      serviceField.value = serviceOptions["sample-availability-enquiry"];
    }
    if (quantityField instanceof HTMLInputElement) {
      quantityField.value = "1";
    }
    if (designField instanceof HTMLTextAreaElement) {
      designField.value = "I would like to ask when verified physical samples will be available through the RITI Sample Edit.";
    }
    if (requirementsField instanceof HTMLTextAreaElement) {
      requirementsField.value = "Sample availability enquiry only; no products or online ordering are currently available.";
    }
  }

  const formStatus = enquiryForm.querySelector("[data-form-status]");
  const sendButton = enquiryForm.querySelector('button[type="submit"]');
  const turnstileSlot = enquiryForm.querySelector("[data-turnstile-slot]");
  let turnstileWidgetId;
  let turnstileToken = "";
  let widgetReady = false;

  const setStatus = (message, state = "info") => {
    if (formStatus) {
      formStatus.textContent = message;
      formStatus.dataset.state = state;
    }
  };

  const configReady = Boolean(enquiryEndpoint && turnstileSiteKey);
  if (sendButton instanceof HTMLButtonElement) {
    sendButton.disabled = !configReady;
    if (!configReady) {
      sendButton.textContent = "Website form unavailable";
    }
  }
  if (!configReady) {
    setStatus("Website form submission is currently unavailable. Nothing will be sent from this form. Use WhatsApp, phone or email to contact RITI FASHION.", "info");
  } else if (turnstileSlot) {
    loadTurnstile().then((turnstile) => {
      turnstileWidgetId = turnstile.render(turnstileSlot, {
        sitekey: turnstileSiteKey,
        action: "public_enquiry",
        callback: (token) => {
          turnstileToken = token;
          widgetReady = true;
          setStatus("Verification complete. You can submit your enquiry.", "info");
        },
        "expired-callback": () => {
          turnstileToken = "";
          widgetReady = false;
          setStatus("Verification expired. Complete the check again before submitting.", "error");
        },
        "error-callback": () => {
          turnstileToken = "";
          widgetReady = false;
          setStatus("A security check could not be completed. Nothing was sent; please contact RITI FASHION directly.", "error");
        },
      });
    }).catch((error) => {
      console.error("Could not initialize enquiry spam verification.", error);
      setStatus("A security check could not be prepared. Nothing was sent; please contact RITI FASHION directly.", "error");
    });
  }

  const getFormValues = () => {
    const formData = new FormData(enquiryForm);
    const optionalText = (key) => String(formData.get(key) || "").trim();
    const values = {
      name: optionalText("name"),
      business: optionalText("business"),
      phone: optionalText("phone"),
      email: optionalText("email"),
      category: optionalText("category"),
      service: optionalText("service"),
      quantity: Number(formData.get("quantity")),
      design: optionalText("design"),
    };
    ["designCount", "sizeBreakdown", "materials", "timeline", "requirements"].forEach((key) => {
      const value = optionalText(key);
      if (value) {
        values[key] = key === "designCount" ? Number(value) : value;
      }
    });
    return values;
  };

  const getEnquiryMessage = () => {
    const values = getFormValues();
    const fields = [
      ["Name", "name"],
      ["Business or brand", "business"],
      ["Phone", "phone"],
      ["Email", "email"],
      ["Garment category", "category"],
      ["Service required", "service"],
      ["Estimated quantity", "quantity"],
      ["Number of designs/styles", "designCount"],
      ["Size breakdown", "sizeBreakdown"],
      ["Fabric/material requirements", "materials"],
      ["Design details and specifications", "design"],
      ["Production timeline", "timeline"],
      ["Additional requirements", "requirements"],
    ];
    return [
      WHATSAPP_INTRO,
      ...fields.map(([label, field]) => `${label}: ${values[field] || "Not provided"}`),
    ].join("\n");
  };

  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) {
      return;
    }
    if (!configReady) {
      setStatus("Website form submission is currently unavailable. Nothing was sent. Please contact RITI FASHION by WhatsApp, phone or email.", "error");
      return;
    }
    if (!widgetReady || !turnstileToken) {
      setStatus("Complete the security check before submitting. Nothing has been sent yet.", "error");
      return;
    }

    let endpointUrl;
    try {
      endpointUrl = new URL(enquiryEndpoint, window.location.href);
    } catch (error) {
      console.error("The configured enquiry endpoint is invalid.", error);
      setStatus("The website form could not be prepared. Nothing was sent; please contact RITI FASHION directly.", "error");
      return;
    }
    const localHttp = ["localhost", "127.0.0.1"].includes(endpointUrl.hostname);
    if (
      endpointUrl.pathname !== "/api/enquiries" ||
      (endpointUrl.protocol !== "https:" && !(localHttp && endpointUrl.protocol === "http:"))
    ) {
      setStatus("The website form could not be prepared securely. Nothing was sent; please contact RITI FASHION directly.", "error");
      return;
    }

    const payload = { ...getFormValues(), turnstileToken };
    enquiryForm.setAttribute("aria-busy", "true");
    if (sendButton instanceof HTMLButtonElement) {
      sendButton.disabled = true;
    }
    setStatus("Submitting your enquiry securely…", "info");

    try {
      const response = await fetch(endpointUrl.href, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let responseData;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }
      if (
        response.status === 201 &&
        responseData?.status === "received" &&
        typeof responseData.enquiryId === "string"
      ) {
        enquiryForm.reset();
        turnstileToken = "";
        widgetReady = false;
        if (window.turnstile && turnstileWidgetId !== undefined) {
          window.turnstile.reset(turnstileWidgetId);
        }
        setStatus("Your enquiry was received. RITI FASHION can now review your submitted requirements.", "success");
        return;
      }
      const serverMessage = typeof responseData?.error?.message === "string"
        ? responseData.error.message
        : "The server did not confirm receipt.";
      setStatus(`${serverMessage} No success was recorded. If the request may have reached the server, contact RITI FASHION before submitting again.`, "error");
    } catch (error) {
      console.error("Enquiry submission did not receive a server response.", error);
      setStatus("We could not confirm whether the enquiry reached the server. Please contact RITI FASHION before trying again.", "error");
    } finally {
      enquiryForm.removeAttribute("aria-busy");
      if (sendButton instanceof HTMLButtonElement) {
        sendButton.disabled = false;
      }
    }
  });

  const whatsappSubmit = enquiryForm.querySelector("[data-whatsapp-enquiry]");
  if (whatsappSubmit) {
    whatsappSubmit.addEventListener("click", () => {
      if (!enquiryForm.reportValidity()) {
        return;
      }
      window.open(whatsappUrl(getEnquiryMessage()), "_blank", "noopener,noreferrer");
      setStatus("A WhatsApp message draft was opened for you to review and send. This website has not submitted or stored the enquiry.", "info");
    });
  }
});

document.querySelectorAll(".portfolio-filters").forEach((filterGroup) => {
  const cards = document.querySelectorAll(".portfolio-card[data-category]");
  filterGroup.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      filterGroup.querySelectorAll("[data-filter]").forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle("is-active", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });
      cards.forEach((card) => {
        const categories = card.dataset.category.split(/\s+/);
        card.hidden = selectedFilter !== "all" && !categories.includes(selectedFilter);
      });
    });
  });
});

const imagePreviewDialog = document.querySelector(".portfolio-preview-dialog");
if (imagePreviewDialog instanceof HTMLDialogElement) {
  const previewImage = imagePreviewDialog.querySelector(".preview-dialog-image");
  const previewTitle = imagePreviewDialog.querySelector("#preview-title");
  const previewDescription = imagePreviewDialog.querySelector(".preview-dialog-copy p");
  const previewCloseButton = imagePreviewDialog.querySelector(".preview-close");
  let previewTrigger;
  const restorePreviewFocus = () => {
    const trigger = previewTrigger;
    previewTrigger = undefined;
    if (trigger instanceof HTMLElement && trigger.isConnected) {
      trigger.focus({ preventScroll: true });
    }
  };
  const closePreview = () => {
    if (imagePreviewDialog.open) {
      imagePreviewDialog.close();
    }
    restorePreviewFocus();
  };
  document.querySelectorAll(".portfolio-image-button").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      const caption = button.nextElementSibling;
      if (!(image instanceof HTMLImageElement) || !caption) {
        return;
      }
      previewImage.src = image.currentSrc || image.src;
      previewImage.alt = image.alt;
      previewTitle.textContent = caption.querySelector("strong")?.textContent || "Garment sample reference";
      previewDescription.textContent = caption.querySelector("small")?.textContent || "Illustrative stock image.";
      previewTrigger = button;
      imagePreviewDialog.showModal();
      previewCloseButton?.focus();
    });
  });
  previewCloseButton?.addEventListener("click", closePreview);
  imagePreviewDialog.addEventListener("close", restorePreviewFocus);
  imagePreviewDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePreview();
  });
  imagePreviewDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closePreview();
    }
  });
  imagePreviewDialog.addEventListener("click", (event) => {
    if (event.target === imagePreviewDialog) {
      closePreview();
    }
  });
}

const sampleCatalogueRoot = document.querySelector("[data-sample-catalogue]");
if (sampleCatalogueRoot instanceof HTMLElement) {
  const catalogue = window.RITI_SAMPLE_EDIT;
  if (!catalogue || catalogue.schemaVersion !== 3 || !Array.isArray(catalogue.items)) {
    throw new TypeError("The sample catalogue requires a schemaVersion 3 product listing array.");
  }
  const productGrid = document.querySelector("#sample-product-grid");
  const emptyState = document.querySelector("[data-sample-empty]");
  if (!(productGrid instanceof HTMLElement) || !(emptyState instanceof HTMLElement)) {
    throw new TypeError("The sample catalogue requires its product grid and empty state.");
  }

  const appendProductDetail = (list, label, value) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    list.append(row);
  };

  let publishedListings = 0;
  const previewLimit = Number(productGrid.dataset.previewLimit || 0);
  const availableItems = catalogue.items.filter((product) => product?.availability === "available");
  const itemsToRender = previewLimit > 0 ? availableItems.slice(0, previewLimit) : availableItems;
  itemsToRender.forEach((product) => {
    if (
      !product ||
      typeof product.id !== "string" ||
      !product.id.trim() ||
      typeof product.designCode !== "string" ||
      !product.designCode.trim() ||
      typeof product.name !== "string" ||
      !Array.isArray(product.images)
    ) {
      throw new TypeError("Each sample listing must have an identifier, name, design code, and image list.");
    }

    if (
      !product.name.trim() ||
      typeof product.description !== "string" ||
      !product.description.trim() ||
      typeof product.fabric !== "string" ||
      !product.fabric.trim() ||
      typeof product.specifications !== "string" ||
      !product.specifications.trim() ||
      typeof product.pricePerPiece !== "number" ||
      !Number.isFinite(product.pricePerPiece) ||
      product.pricePerPiece < 0 ||
      typeof product.currency !== "string" ||
      !/^[A-Z]{3}$/.test(product.currency) ||
      !Number.isInteger(product.minimumOrderQuantity) ||
      product.minimumOrderQuantity < 1 ||
      !Number.isInteger(product.availableQuantity) ||
      product.availableQuantity < product.minimumOrderQuantity ||
      product.images.length === 0
    ) {
      throw new TypeError(`Published sample listing ${product.designCode} is missing confirmed product details.`);
    }
    publishedListings += 1;

    const card = document.createElement("article");
    card.className = "sample-product-card";
    const gallery = document.createElement("div");
    gallery.className = "sample-product-gallery";
    const imageWrap = document.createElement("div");
    imageWrap.className = "sample-product-image-wrap";
    if (product.images.length > 0) {
      const mainImage = document.createElement("img");
      mainImage.className = "sample-product-main-image";
      mainImage.loading = "lazy";
      mainImage.decoding = "async";
      const thumbnails = document.createElement("div");
      thumbnails.className = "sample-product-thumbnails";
      thumbnails.setAttribute("role", "group");
      thumbnails.setAttribute("aria-label", `Product photos for ${product.designCode}`);

      product.images.forEach((image, imageIndex) => {
        if (!image || typeof image.src !== "string" || !image.src.trim() || typeof image.alt !== "string" || !image.alt.trim()) {
          throw new TypeError(`Sample listing ${product.designCode} contains an invalid photo reference.`);
        }
        let photoUrl;
        try {
          photoUrl = new URL(image.src, window.location.href);
        } catch {
          throw new TypeError(`Sample listing ${product.designCode} contains an invalid photo URL.`);
        }
        if (photoUrl.protocol !== "https:" && photoUrl.origin !== window.location.origin) {
          throw new TypeError(`Sample listing ${product.designCode} photo URLs must use HTTPS or the current site.`);
        }
        const thumbnailButton = document.createElement("button");
        thumbnailButton.type = "button";
        thumbnailButton.className = "sample-product-thumbnail";
        thumbnailButton.setAttribute("aria-label", `Show product photo ${imageIndex + 1} for ${product.designCode}`);
        thumbnailButton.setAttribute("aria-pressed", String(imageIndex === 0));
        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = image.src;
        thumbnailImage.alt = "";
        thumbnailImage.loading = "lazy";
        thumbnailImage.decoding = "async";
        thumbnailButton.append(thumbnailImage);
        thumbnailButton.addEventListener("click", () => {
          mainImage.src = image.src;
          mainImage.alt = image.alt;
          thumbnails.querySelectorAll(".sample-product-thumbnail").forEach((button) => {
            button.setAttribute("aria-pressed", String(button === thumbnailButton));
          });
        });
        thumbnails.append(thumbnailButton);
        if (imageIndex === 0) {
          mainImage.src = image.src;
          mainImage.alt = image.alt;
        }
      });

      imageWrap.append(mainImage);
      gallery.append(imageWrap);
      if (product.images.length > 1) {
        gallery.append(thumbnails);
      }
    }

    const details = document.createElement("div");
    details.className = "sample-product-details";
    const listingMeta = document.createElement("div");
    listingMeta.className = "sample-product-meta";
    const code = document.createElement("span");
    code.className = "sample-product-code";
    code.textContent = product.designCode;
    const availability = document.createElement("span");
    availability.className = "sample-product-availability";
    availability.textContent = "In stock";
    listingMeta.append(code, availability);
    const heading = document.createElement("h3");
    heading.textContent = product.name;
    const description = document.createElement("p");
    description.className = "sample-product-description";
    description.textContent = product.description;
    const specificationList = document.createElement("dl");
    specificationList.className = "sample-product-specifications";
    appendProductDetail(specificationList, "Fabric", product.fabric);
    appendProductDetail(specificationList, "Style & specifications", product.specifications);
    if (Array.isArray(product.colours) && product.colours.length > 0) {
      appendProductDetail(specificationList, "Colours", product.colours.join(", "));
    }
    if (Array.isArray(product.sizes) && product.sizes.length > 0) {
      appendProductDetail(specificationList, "Sizes", product.sizes.join(", "));
    }
    const priceValue = `${product.pricePerPiece.toLocaleString()} ${product.currency}`;
    appendProductDetail(specificationList, "Price per piece", priceValue);
    appendProductDetail(specificationList, "Available quantity", product.availableQuantity.toLocaleString());
    appendProductDetail(specificationList, "Minimum order quantity", product.minimumOrderQuantity.toLocaleString());
    const selectionNote = document.createElement("p");
    selectionNote.className = "sample-product-selection-note";
    selectionNote.textContent = "Available colours and sizes are shown where applicable. Orders remain limited to the listed MOQ and available stock.";
    const sampleEnquiry = document.createElement("a");
    sampleEnquiry.className = "button button-outline-dark sample-product-enquiry";
    sampleEnquiry.href = whatsappUrl(`Hello RITI FASHION, I would like to enquire about the sample "${product.name}" (${product.designCode}). Please confirm its current availability and individual order details.`);
    sampleEnquiry.target = "_blank";
    sampleEnquiry.rel = "noopener noreferrer";
    sampleEnquiry.textContent = "Enquire about this sample";
    details.append(listingMeta, heading, description, specificationList, selectionNote, sampleEnquiry);
    card.append(gallery, details);
    productGrid.append(card);
  });
  emptyState.hidden = publishedListings > 0;
}
