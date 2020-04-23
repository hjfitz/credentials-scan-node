"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ruleset = {
    "rules": [
        {
            "description": "AWS Manager ID",
            "regex": /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/,
            "tags": ["key", "AWS"]
        },
        {
            "description": "AWS Secret Key",
            "regex": /aws(.{0,20})?[0-9a-zA-Z\/+]{40}/i,
            "tags": ["key", "AWS"]
        },
        {
            "description": "AWS MWS key",
            "regex": /amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
            "tags": ["key", "AWS", "MWS"]
        },
        {
            "description": "Azure Secrets",
            "regex": /azure_[a-zA-Z]{+}=[0-9a-zA-Z\/+]{40}/i,
            "tags": ["key", "Azure"]
        },
        {
            "description": "Facebook Secret Key",
            "regex": /(facebook|fb)(.{0,20})?[0-9a-f]{32}/i,
            "tags": ["key", "Facebook"]
        },
        {
            "description": "Facebook Client ID",
            "regex": /(facebook|fb)(.{0,20})?[0-9]{13,17}/i,
            "tags": ["key", "Facebook"]
        },
        {
            "description": "Twitter Secret Key",
            "regex": /twitter(.{0,20})?[0-9a-z]{35,44}/i,
            "tags": ["key", "Twitter"]
        },
        {
            "description": "Twitter Client ID",
            "regex": /twitter(.{0,20})?[0-9a-z]{18,25}/i,
            "tags": ["client", "Twitter"]
        },
        {
            "description": "Github",
            "regex": /github(.{0,20})?[0-9a-zA-Z]{35,40}/i,
            "tags": ["key", "Github"]
        },
        {
            "description": "LinkedIn Client ID",
            "regex": /linkedin(.{0,20})?[0-9a-z]{12}/i,
            "tags": ["client", "LinkedIn"]
        },
        {
            "description": "LinkedIn Secret Key",
            "regex": /linkedin(.{0,20})?[0-9a-z]{16}/i,
            "tags": ["secret", "LinkedIn"]
        },
        {
            "description": "Slack",
            "regex": /xox[baprs]-([0-9a-zA-Z]{10,48})?/,
            "tags": ["key", "Slack"]
        },
        {
            "description": "Asymmetric Private Key",
            "regex": /-----BEGIN ((EC|PGP|DSA|RSA|OPENSSH) )?PRIVATE KEY( BLOCK)?-----/,
            "tags": ["key", "AsymmetricPrivateKey"]
        },
        {
            "description": "Generic Credential",
            "regex": /(api_key|apikey|secret|password|pass|pw|key)(.{0,20})?[0-9a-zA-Z]{16,45}/i,
            "tags": ["key", "API", "generic"]
        },
        {
            "description": "Google API key",
            "regex": /AIza[0-9A-Za-z\\-_]{35}/,
            "tags": ["key", "Google"]
        },
        {
            "description": "Google (GCP) Service Account",
            "regex": /"type": "service_account"/,
            "tags": ["key", "Google"]
        },
        {
            "description": "Heroku API key",
            "regex": /heroku(.{0,20})?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
            "tags": ["key", "Heroku"]
        },
        {
            "description": "MailChimp API key",
            "regex": /(mailchimp|mc)(.{0,20})?[0-9a-f]{32}-us[0-9]{1,2}/i,
            "tags": ["key", "Mailchimp"]
        },
        {
            "description": "Mailgun API key",
            "regex": /((mailgun|mg)(.{0,20})?)?key-[0-9a-z]{32}/i,
            "tags": ["key", "Mailgun"]
        },
        {
            "description": "PayPal Braintree access token",
            "regex": /access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/,
            "tags": ["key", "Paypal"]
        },
        {
            "description": "Picatic API key",
            "regex": /sk_live_[0-9a-z]{32}/,
            "tags": ["key", "Picatic"]
        },
        {
            "description": "SendGrid API Key",
            "regex": /SG\.[\w_]{16,32}\.[\w_]{16,64}/,
            "tags": ["key", "SendGrid"]
        },
        {
            "description": "Slack Webhook",
            "regex": /https:\/\/hooks.slack.com\/services\/T[a-zA-Z0-9_]{8}\/B[a-zA-Z0-9_]{8}\/[a-zA-Z0-9_]{24}/,
            "tags": ["key", "slack"]
        },
        {
            "description": "Stripe API key",
            "regex": /stripe(.{0,20})?[sr]k_live_[0-9a-zA-Z]{24}/i,
            "tags": ["key", "Stripe"]
        },
        {
            "description": "Square access token",
            "regex": /sq0atp-[0-9A-Za-z\-_]{22}/,
            "tags": ["key", "square"]
        },
        {
            "description": "Square OAuth secret",
            "regex": /sq0csp-[0-9A-Za-z\\-_]{43}/,
            "tags": ["key", "square"]
        },
        {
            "description": "Twilio API key",
            "regex": /twilio(.{0,20})?SK[0-9a-f]{32}/i,
            "tags": ["key", "twilio"]
        }
    ]
};
exports.default = ruleset;
