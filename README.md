# :exclamation: **This repository has been archived**
The better way is alias shell command
```shell
alias hexo_post_article_to_source_repo="git add -A && git commit -m \"docs: site updated `date \"+%Y-%m-%d %H:%M:%S\"`\" && git push -u origin HEAD:main"
alias hexop=hexo_post_article_to_source_repo
```

# hexo-auto-push-git
A plugin for [Hexo] that can one-command push source code.  

> Modified from [hexo-deployer-git], which is a Git deployer plugin for [Hexo].

## Installation

``` bash
$ npm install https://github.com/ChiuJun/hexo-auto-push-git.git --save-dev
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
# You can use this:
deploy:
  type: git
  branch: [branch]
  message: [message]

```

- **branch**: Git branch to deploy the static site to.
- **message**: Commit message. Defaults to `Site updated: {{ now("yyyy-MM-dd HH:mm:ss") }}`.

## How it works

`hexo-auto-push-git` works with [Hexo Deployer API].It use command `git add -A` added **all** files change to the staging area and push to remote repo with single commit.

## License

MIT

[Hexo]: https://hexo.io/
[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[Hexo Deployer API]: https://hexo.io/api/deployer.html
