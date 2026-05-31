import {
  Rocket,
  GitFork,
  Search,
  ShieldCheck,
  Layers,
  FileCode,
  FlaskConical,
  Lightbulb,
  Cloud,
} from "lucide-react";

export const Cards = [
  {
    id: "getting-started",
    title: "Getting Started",
    desc: "Atlas is a language-independent tool for managing and migrating database schemas using modern DevOps principles.",
    Icon: Rocket,
    sections: ["System Requirements", "Console", "React Developer Tools", "Environments", "FAQ"],
    content: {
      intro: "This guide covers the prerequisites you need to start building projects.",
      sections: [
        {
          title: "System Requirements",
          body: "Before you can create your first project, make sure you have the following prerequisites.",
          bullets: [
            "You have Node.js 16.10 or higher installed. We recommend nvm to install Node.",
            "You have npm 7.0 or higher installed. If you used nvm to install Node, this is the case.",
            "You are familiar with React and Typescript. Don't worry, you don't need to be an expert.",
          ],
        },
        {
          title: "Console",
          body: "Use the console for simple debugging such as logging variables, function calls, or other helpful messages. All logs are shown in the terminal during development mode.",
          code: `import { Form } from "@apolo/api"\n\nconsole.log("Hello World"); // Prints: Hello World\n\nconst name = "projectName";\nconsole.debug(\`Launch \${name}\`); // Prints: Launch projectName\n\nconst error = new Error("Boom 💥")\nconsole.error(error); // Prints: Boom 💥`,
        },
        {
          title: "React Developer Tools",
          body: "We support React Developer Tools out-of-the-box. Use the tools to inspect and change the props of your React components.",
        },
      ],
    },
  },
  {
    id: "atlas-vs-others",
    title: "Atlas vs Others",
    desc: "Atlas vs Classic Schema Migration Tools: Flyway, Liquibase, and ORMs.",
    Icon: GitFork,
    sections: ["Overview", "Flyway", "Liquibase", "ORMs", "Summary"],
    content: {
      intro: "Compare Atlas against classic schema migration tools to understand the right fit for your workflow.",
      sections: [
        {
          title: "Overview",
          body: "Atlas takes a declarative, schema-first approach unlike traditional versioned migration tools.",
          bullets: [
            "Atlas uses HCL or SQL schema definitions as the source of truth.",
            "Flyway and Liquibase rely on ordered migration scripts managed manually.",
            "ORMs generate migrations automatically but can introduce drift.",
          ],
        },
        {
          title: "Flyway",
          body: "Flyway is a popular Java-based migration tool that uses versioned SQL scripts applied in sequence.",
          code: `-- V1__create_users.sql\nCREATE TABLE users (\n  id   SERIAL PRIMARY KEY,\n  name TEXT NOT NULL\n);`,
        },
      ],
    },
  },
  {
    id: "schema-inspection",
    title: "Schema Inspection",
    desc: "Inspecting existing database schemas and export database schema to code.",
    Icon: Search,
    sections: ["Inspecting Schemas", "Exporting to HCL", "Exporting to SQL", "Tips"],
    content: {
      intro: "Atlas can inspect an existing database and export its schema as code.",
      sections: [
        {
          title: "Inspecting Schemas",
          body: "Run the inspect command to read your live database schema into Atlas.",
          code: `atlas schema inspect \\\n  --url "postgres://user:pass@localhost/mydb" \\\n  --format '{{ sql . }}'`,
        },
        {
          title: "Exporting to HCL",
          body: "You can export the inspected schema to an HCL file for use as your declarative source of truth.",
          bullets: [
            "HCL output preserves all column types, constraints, and indexes.",
            "Use --format '{{ hcl . }}' to produce HCL output.",
            "Save the file and commit it to version control.",
          ],
        },
      ],
    },
  },
  {
    id: "declarative-workflow",
    title: "Declarative Workflow",
    desc: "With Atlas's declarative schema migrations, users don't need to manually craft SQL migration scripts.",
    Icon: ShieldCheck,
    sections: ["How It Works", "Writing Your Schema", "Applying Changes", "Dry Run"],
    content: {
      intro: "The declarative workflow lets you define the desired state and Atlas figures out how to get there.",
      sections: [
        {
          title: "How It Works",
          body: "Atlas computes the diff between the current database state and your desired schema, then generates the SQL required.",
          bullets: [
            "Define your schema in HCL or SQL.",
            "Atlas diffs the desired vs actual state.",
            "Atlas generates and optionally applies the migration plan.",
          ],
        },
        {
          title: "Writing Your Schema",
          body: "Define tables, columns, indexes, and constraints in a .hcl file.",
          code: `table "users" {\n  schema = schema.public\n  column "id" {\n    type = int\n    auto_increment = true\n  }\n  column "name" {\n    type = varchar(255)\n  }\n  primary_key {\n    columns = [column.id]\n  }\n}`,
        },
      ],
    },
  },
  {
    id: "versioned-workflow",
    title: "Versioned Workflow",
    desc: "This guide offers a high-level overview of the Atlas versioned migration workflow.",
    Icon: Layers,
    sections: ["Overview", "Creating Migrations", "Applying Migrations", "Rollbacks"],
    content: {
      intro: "The versioned workflow gives you explicit control over every migration file.",
      sections: [
        {
          title: "Overview",
          body: "In the versioned workflow, each change to the schema is captured in a numbered migration file.",
          bullets: [
            "Migration files are stored in a migrations/ directory.",
            "Atlas tracks which files have been applied using a schema_migrations table.",
            "Files are applied in lexicographic order.",
          ],
        },
        {
          title: "Creating Migrations",
          body: "Use atlas migrate diff to auto-generate a migration file from schema changes.",
          code: `atlas migrate diff add_users_table \\\n  --dir "file://migrations" \\\n  --to "file://schema.hcl" \\\n  --dev-url "docker://postgres/15/dev"`,
        },
      ],
    },
  },
  {
    id: "schema-as-code",
    title: "Schema as Code",
    desc: "Inspecting existing database schemas and export database schema to code.",
    Icon: FileCode,
    sections: ["Introduction", "HCL Syntax", "SQL Syntax", "Best Practices"],
    content: {
      intro: "Schema as Code means your database structure lives alongside your application code in version control.",
      sections: [
        {
          title: "Introduction",
          body: "Treating schema as code brings the same benefits as infrastructure as code — repeatability, auditability, and collaboration.",
          bullets: [
            "Review schema changes via pull requests.",
            "Roll back to any previous schema state using Git history.",
            "Use CI/CD pipelines to validate and apply schema changes.",
          ],
        },
        {
          title: "HCL Syntax",
          body: "Atlas uses HCL (HashiCorp Configuration Language) for schema definitions.",
          code: `schema "public" {}\n\ntable "orders" {\n  schema = schema.public\n  column "id" { type = bigint }\n  column "total" { type = numeric(10,2) }\n}`,
        },
      ],
    },
  },
  {
    id: "testing-framework",
    title: "Testing Framework",
    desc: "The atlas schema test command lets you validate your database schema using software testing paradigms.",
    Icon: FlaskConical,
    sections: ["Writing Tests", "Running Tests", "Assertions", "CI Integration"],
    content: {
      intro: "Atlas lets you write tests for your schema to catch regressions before they reach production.",
      sections: [
        {
          title: "Writing Tests",
          body: "Schema tests are written in HCL and placed alongside your schema files.",
          code: `test "schema" "users_table" {\n  assert {\n    sql = "SELECT count(*) FROM users"\n    expected = "0"\n  }\n}`,
        },
        {
          title: "Running Tests",
          body: "Run your schema tests with the atlas schema test command.",
          bullets: [
            "Tests spin up a dev database automatically.",
            "Each test runs in an isolated transaction.",
            "Failed assertions report the SQL and expected vs actual values.",
          ],
        },
      ],
    },
  },
  {
    id: "concepts",
    title: "Concepts",
    desc: "Atlas uses a standard URL format to connect to databases and load schemas and migrations from various sources.",
    Icon: Lightbulb,
    sections: ["URLs", "Dev Database", "Schema Loaders", "Diff Policies"],
    content: {
      intro: "Understanding core Atlas concepts will help you use the tool more effectively.",
      sections: [
        {
          title: "URLs",
          body: "Atlas uses standard database URLs to connect to target and dev databases.",
          code: `# PostgreSQL\npostgres://user:pass@host:5432/dbname\n\n# MySQL\nmysql://user:pass@host:3306/dbname\n\n# SQLite\nsqlite://path/to/file.db`,
        },
        {
          title: "Dev Database",
          body: "The dev database is a temporary database used to normalize schemas and compute diffs.",
          bullets: [
            "Use a Docker-based dev database for a clean environment every time.",
            "The dev database must be the same engine as your target database.",
            "Atlas cleans up the dev database after each operation.",
          ],
        },
      ],
    },
  },
  {
    id: "cloud",
    title: "Cloud",
    desc: "Gain full visibility into the databases in your development and production environments.",
    Icon: Cloud,
    sections: ["Overview", "Connecting", "Schema Registry", "Migration History"],
    content: {
      intro: "Atlas Cloud gives you a central place to manage schemas, migrations, and deployments.",
      sections: [
        {
          title: "Overview",
          body: "Atlas Cloud extends the CLI with a web dashboard, audit logs, and team collaboration features.",
          bullets: [
            "View all your schemas and migration history in one place.",
            "Invite team members and manage permissions.",
            "Integrate with CI/CD to gate deployments on schema checks.",
          ],
        },
        {
          title: "Connecting",
          body: "Link your CLI to Atlas Cloud with an API token.",
          code: `atlas login --token <YOUR_API_TOKEN>\n\n# Verify connection\natlas whoami`,
        },
      ],
    },
  },
];