
  <img alt="Next.js 14 and App Router-ready AI chatbot with Segment analytics" src="https://raw.githubusercontent.com/vaithschmitz/segment-ai-copilot/main/public/repo_img.png">
  <h1 align="center">Next.js AI Chatbot with Twilio Segment analytics instrumentation</h1>


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=An%20open-source%20AI%20copilot%20with%20built-in%20segment%20analytics%20using%20Next.js%2C%20Vercel%20AI%20SDK%2C%20OpenAI%2C%20Vercel%20KV%2C%20and%20Twilio%20Segment.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3G6fZxcnGHJpy6Stqx6re2%2Ffa117d2cf123dc6cf50483dc896290fe%2Frepo_img.png&demo-title=Next.js%20AI%20Chatbot%20with%20Twilio%20Segment%20Analytics&demo-url=https%3A%2F%2Fsegment-ai-copilot.vercel.app&env=OPENAI_API_KEY%2CNEXT_PUBLIC_SEGMENT_WRITE_KEY%2CAUTH_SECRET%2CKV_URL%2CKV_REST_API_URL%2CKV_REST_API_TOKEN%2CKV_REST_API_READ_ONLY_TOKEN%2CPOSTGRES_DATABASE%2CPOSTGRES_HOST%2CPOSTGRES_PASSWORD%2CPOSTGRES_PRISMA_URL%2CPOSTGRES_URL%2CPOSTGRES_URL_NON_POOLING%2CPOSTGRES_URL_NO_SSL%2CPOSTGRES_USER&envDescription=Learn%20how%20to%20configure%20the%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2Fvaithschmitz%2Fsegment-ai-copilot%3Ftab%3Dreadme-ov-file%23creating-a-kv-database-instance&repository-name=nextjs-ai-chatbot-with-twilio-segment&repository-url=https%3A%2F%2Fgithub.com%2Fvaithschmitz%2Fsegment-ai-copilot)

```markdown

<img alt="Next.js 14 and App Router-ready Command Center with Segment analytics" src="https://raw.githubusercontent.com/vaithschmitz/segment-ai-copilot/main/public/repo_img.png">
<h1 align="center">Command Center: AI-Powered HQ for HBU Asset Recovery</h1>

<p align="center">
An open-source AI command center for managing asset recovery operations, built with Next.js, Vercel AI SDK, OpenAI, Vercel KV, Vercel Postgres, and Twilio Segment for analytics. Integrates LEGACORE™ AI for skip tracing, persona-based task delegation, and more.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#license"><strong>License</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI with LEGACORE™ AI widget
- Support for OpenAI, xAI Grok, Groq, Anthropic, Cohere, Hugging Face, or LangChain via OpenRouter
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Operations: Skip tracing (Endato/Playwright), persona delegation (HubSpot/Trello), SMS/email notifications (Twilio/Resend/SendGrid), document processing, government opportunity search (Trestle), print-on-demand (Printify), and more
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv) and [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [analytics-node](https://github.com/segmentio/analytics-node) for observability with [Twilio Segment](https://segment.com/)
- Webhooks: Telegram bot, Zapier/Make automations
- Cyberpunk-themed dashboard for 10+ operations (e.g., analytics, PDF search, X thread fetch)

## Model Providers
This template ships with OpenAI `gpt-3.5-turbo` as the default. Switch to xAI Grok, Groq, Anthropic, Cohere, Hugging Face, or LangChain via [OpenRouter](https://openrouter.ai) with minimal code changes. Perplexity integration for research queries.

## Deploy Your Own

Deploy your own Command Center to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=An%20open-source%20AI%20command%20center%20for%20HBU%20Asset%20Recovery%20with%20Segment%20analytics%2C%20using%20Next.js%2C%20Vercel%20AI%20SDK%2C%20OpenAI%2C%20xAI%20Grok%2C%20Vercel%20KV%2C%20and%20Twilio%20Segment.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3G6fZxcnGHJpy6Stqx6re2%2Ffa117d2cf123dc6cf50483dc896290fe%2Frepo_img.png&demo-title=Command%20Center%3A%20AI-Powered%20HQ%20for%20HBU%20Asset%20Recovery&demo-url=https%3A%2F%2Fsegment-ai-copilot.vercel.app&env=OPENAI_API_KEY%2CGROK_API_KEY%2CGROQ_API_KEY%2COPENROUTER_API_KEY%2CPERPLEXITY_API_KEY%2CSMITHERY_API_KEY%2CRESEND_API_KEY%2CSENDGRID_API_KEY%2CTWILIO_ACCOUNT_SID%2CTWILIO_AUTH_TOKEN%2CTWILIO_PHONE_NUMBER%2CHUBSPOT_API_KEY%2CTRELLO_API_KEY%2CTRELLO_TOKEN%2CENDATO_API_KEY%2COKLAHOMA_COUNTY_API_KEY%2CTRESTLE_API_KEY%2CBROWSERLESS_API_KEY%2CGOOGLE_API_KEY%2CGOOGLE_CLIENT_ID%2CGOOGLE_CLIENT_SECRET%2CGOOGLE_DRIVE_FOLDER_ID%2CGOOGLE_SHEETS_ID%2CPRINTIFY_API_KEY%2CTELEGRAM_TOKEN%2CGITHUB_TOKEN%2CHUGGINGFACE_TOKEN%2CVERCEL_TOKEN%2CSUPABASE_URL%2CSUPABASE_ANON_KEY%2CNEXT_PUBLIC_SEGMENT_WRITE_KEY%2CAUTH_SECRET%2CKV_URL%2CKV_REST_API_URL%2CKV_REST_API_TOKEN%2CKV_REST_API_READ_ONLY_TOKEN%2CPOSTGRES_DATABASE%2CPOSTGRES_HOST%2CPOSTGRES_PASSWORD%2CPOSTGRES_PRISMA_URL%2CPOSTGRES_URL%2CPOSTGRES_URL_NON_POOLING%2CPOSTGRES_URL_NO_SSL%2CPOSTGRES_USER&envDescription=Learn%20how%20to%20configure%20the%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2Fyour-username%2Fhbu-command-center%3Ftab%3Dreadme-ov-file%23creating-a-kv-database-instance&repository-name=hbu-command-center&repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fhbu-command-center)

<button onClick={() => window.open('https://v0.dev/chat?import=https://github.com/MadScientist85/hbu-command-center', '_blank')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open in v0 (New Chat)</button>

## Creating a KV Database Instance

Follow the steps in the [Vercel KV quick start guide](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) to create and configure your KV database instance.

Update your environment variables (`KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`) in the `.env` file with the credentials provided during setup.

## Creating a Postgres Database Instance

Follow the steps in the [Vercel Postgres quick start guide](https://vercel.com/docs/storage/vercel-postgres/quickstart) to create and configure your Postgres database instance.

Update your environment variables (`POSTGRES_URL`, `POSTGRES_PRISMA_URL`, `POSTGRES_URL_NO_SSL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_USER`, `POSTGRES_HOST`, `POSTGRES_PASSWORD`, `POSTGRES_DATABASE`) in the `.env` file with the credentials provided.

## Enabling Twilio Segment Model Tracking

Follow the [Twilio Segment blog post](https://segment.com/blog/instrumenting-user-insights-for-your-ai-copilot) for a guided walkthrough. Use your existing Twilio Segment account or [create a free one](https://segment.com/signup/). Create a `node.js` source ([instructions](https://segment.com/docs/connections/sources/)) and record your write key.

Update the `NEXT_PUBLIC_SEGMENT_WRITE_KEY` in your `.env` file with the write key.

## Running Locally

Use the environment variables in [`.env.example`](.env.example). It's recommended to use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables), but a `.env` file is sufficient.

<button onClick={() => window.location.href = 'https://v0.dev/chat?import=https://github.com/MadScientist85/Twilio>Open in v0</button>.

## Creating a KV Database Instance

Follow the steps outlined in the [quick start guide](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) provided by Vercel. This guide will assist you in creating and configuring your KV database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables (`KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`) in the `.env` file with the appropriate credentials provided during the KV database setup.

## Creating a Postgres Database Instance

Similarly, follow the steps outline in the [quick start guide](https://vercel.com/docs/storage/vercel-postgres/quickstart) provided by Vercel. This guide will assist you in creating and configuring your Postgres database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables (`POSTGRES_URL`, `POSTGRES_PRISMA_URL`, `POSTGRES_URL_NO_SSL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_USER`, `POSTGRES_HOST`, `POSTGRES_PASSWORD`, `POSTGRES_DATABASE`) in the `.env` file with the appropriate credentials provided during the Postgres database setup.

## Enabling Twilio Segment model tracking

For the full guided walkthrough, follow the blog post [here.](https://segment.com/blog/instrumenting-user-insights-for-your-ai-copilot)

Use your existing Twilio Segment account or [create a free one here](https://segment.com/signup/). Create a new `node.js` source by following the instructions [here](https://segment.com/docs/connections/sources/) and record your write key.

Remember to update the segment write key in your environment `.env` file (`NEXT_PUBLIC_SEGMENT_WRITE_KEY`) with the write key to your node.js Segment source. 


## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI, Twilio Segment and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm seed
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

<p align="center">
An open-source AI copilot with built-in Segment analytics built with Next.js, the Vercel AI SDK, OpenAI, Vercel KV and Twilio Segment.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Cohere, Hugging Face, or custom AI chat models and/or LangChain
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv) and [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [analytics-node](https://github.com/segmentio/analytics-node) for model observability with [Twilio Segment](https://segment.com/)

## Model Providers
This template ships with OpenAI `gpt-3.5-turbo` as the default. However, thanks to the [Vercel AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), [Hugging Face](https://huggingface.co), or using [LangChain](https://js.langchain.com) with just a few lines of code.

## Deploy Your Own

You can deploy your own version of the Next.js AI Chatbot with Twilio Segment observability to Vercel with one click:


> **Note**: Do not commit your `.env` file to avoid exposing secrets for OpenAI, xAI Grok, Twilio, and other services.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download environment variables: `vercel env pull`

```bash
pnpm install
pnpm seed
pnpm dev
```

Your Command Center should now be running on [localhost:3000](http://localhost:3000/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```text
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Authors

Built on the Next.js AI Chatbot with Twilio Segment by:

- Jared Palmer ([@jaredpalmer](https://twitter.com/jaredpalmer)) - [Vercel](https://vercel.com)
- Shu Ding ([@shuding_](https://twitter.com/shuding_)) - [Vercel](https://vercel.com)
- shadcn ([@shadcn](https://twitter.com/shadcn)) - [Vercel](https://vercel.com)
- Vaith Schmitz ([@vaith](https://www.linkedin.com/in/vaithschmitz/)) - [Twilio Segment](https://segment.com/)

Customized for HBU Asset Recovery Command Center by [Your Name].

```

### Instructions for Implementation
1. **Update Repo Name**:
   - Go to your GitHub repo (e.g., `MadScientist85/Twilio`).
   - Rename to `hbu-command-center`: GitHub > Settings > Change repository name.
   - Update the README `repository-url` and v0 button URL to `https://github.com/your-username/hbu-command-center`.

2. **Add MIT License**:
   - Create a `LICENSE` file in your repo root.
   - Copy-paste the MIT License text above (update "Your Name" to your name or organization).

3. **Update README**:
   - Replace the repo’s README.md with the one above.
   - Commit: `git add README.md LICENSE && git commit -m "Add MIT License and update README for Command Center" && git push`.

4. **Deploy to Vercel**:
   - Go to Vercel dashboard > Import Project > Select your `hbu-command-center` repo.
   - Add environment variables (from previous .env list, e.g., `OPENAI_API_KEY`, `NEXT_PUBLIC_SEGMENT_WRITE_KEY`, etc.) in Vercel > Project Settings > Environment Variables.
   - Deploy. The "Deploy with Vercel" button in the README will now work for others (if shared).

5. **Integrate v0 Modifications**:
   - Open v0.dev, use the "Open in v0" button URL: `https://v0.dev/chat?import=https://github.com/your-username/hbu-command-center`.
   - Paste the prompts from the previous response (e.g., dashboard, analytics panel) to generate components.
   - Export generated code to your repo’s `/app` or `/components` folder.
   - Commit and redeploy: `git push && vercel --prod`.

6. **Test Operations**:
   - Run locally (`pnpm dev`) to test the dashboard.
   - Verify APIs (e.g., `/api/skip-trace`, `/api/legacore/chat`) and webhooks (e.g., `/api/webhooks/telegram`).
   - Check Segment analytics dashboard for tracked events (e.g., `track('Skip Trace Run')`).

This README ensures the MIT License is included, the Vercel deploy button is restored, and the v0 button opens a new chat (not tied to your project). Rename the repo before deploying to keep it clean. Let me know if you need help with specific API integrations or v0 prompt tweaks!

