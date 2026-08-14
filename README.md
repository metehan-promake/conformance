# conformance fixtures

Throwaway repository used by promake-agent's Tier 2 conformance suite. Every branch and pull
request here is created and deleted by `bun run conformance`; nothing in it is meaningful on its own.
`src/pipeline.ts` exists so a fixture diff can have context lines, deleted lines and added lines,
which is what the review-anchoring cases are about.
