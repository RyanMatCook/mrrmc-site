---
slug: luno automated trading - architecture
title: Luno Automated Trading - Architecture
authors: [ryan]
# tags: [facebook, hello, docusaurus]
---

# Luno Automated Trading - Architecture

The next step in this journey is to figure out what we would like to make and what it will look like.

# Starting point

Let's start by getting our hands dirty and then thinking of why...

Clone [this repo]("https://github.com/jasontaylordev/CleanArchitecture") and follow the Readme to install his template:

Assuming you are in the directory that is going to be a repo:

```
git clone https://github.com/jasontaylordev/CleanArchitecture
dotnet new --install Clean.Architecture.Solution.Template
```

Now navigate to your repo and move all the old PoC stuff out the way (run this):

```
mkdir
mv * ./hold
```

Install the template - NB it will assume the solution name from the parent directory (use that to choose your app name):

```
dotnet new ca-sln
```

Build the app (have node installed):

```
npm i -g yarn
cd ./src/WebUI/ClientApp
yarn
yarn audit fix
```

You might need to tweak some things to get the app running depending on your version from git and node versions etc!

Start the client app:

```
yarn start
```

Run the solution:

```
cd ..
dotnet run
```

You should see an app running.
