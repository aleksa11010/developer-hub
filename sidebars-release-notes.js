// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  releaseNotes: [
    // Release Notes Parent
    {
      type: "category",
      label: "Release Notes",
      link: {
        type: "doc",
        id: "whats-new",
      },
      collapsed: true,
      items: [
        { type: "autogenerated", dirName: "." },
        {
          type: "link",
          label: "FirstGen SaaS",
          href: "/docs/first-gen/firstgen-release-notes/harness-saa-s-release-notes",
        },
        {
          type: "link",
          label: "FirstGen Self-Managed Enterprise Edition",
          href: "/docs/first-gen/firstgen-release-notes/harness-on-prem-release-notes",
        },
      ],
    },
    {
      type: "category",
      label: "Subscribe via RSS",
      /*
      link: {
        type: "link",
        label: "Subscribe via RSS",
        href: "pathname:///release-notes/rss.xml",
        className: "sidebar-item-rss",
        customProps: {
          target: "_blank",
        },
      },
      */
      collapsed: true,
      items: [
        {
          type: "link",
          label: "All modules",
          href: "pathname:///release-notes/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "What's new",
          href: "pathname:///release-notes/whats-new/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Early access features",
          href: "pathname:///release-notes/early-access/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Continuous Integration release notes",
          href: "pathname:///release-notes/continuous-integration/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Continuous Delivery & GitOps release notes",
          href: "pathname:///release-notes/continuous-delivery/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Cloud Cost Management release notes",
          href: "pathname:///release-notes/cloud-cost-management/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Feature Flags release notes",
          href: "pathname:///release-notes/feature-flags/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Service Reliability Management release notes",
          href: "pathname:///release-notes/service-reliability-management/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Chaos Engineering release notes",
          href: "pathname:///release-notes/chaos-engineering/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Security Testing Orchestration release notes",
          href: "pathname:///release-notes/security-testing-orchestration/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Continuous Error Tracking release notes",
          href: "pathname:///release-notes/continuous-error-tracking/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Harness Platform release notes",
          href: "pathname:///release-notes/platform/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Self-Managed Enterprise Edition release notes",
          href: "pathname:///release-notes/self-managed-enterprise-edition/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
        {
          type: "link",
          label: "Delegate release notes",
          href: "pathname:///release-notes/delegate/rss.xml",
          className: "sidebar-item-rss",
          customProps: {
            target: "_blank",
          },
        },
      ],
    },
    // {
    //   type: "link",
    //   label: "Subscribe via RSS",
    //   href: "pathname:///release-notes/rss.xml",
    //   className: "sidebar-item-rss",
    //   customProps: {
    //     target: "_blank",
    //   },
    // },

    //Additional Items in this parent can go here.
  ],
};

module.exports = sidebars;
