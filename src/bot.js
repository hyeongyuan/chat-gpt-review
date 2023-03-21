const axios = require("axios");

module.exports = (app) => {
  app.on("issues.opened", async (context) => {
    const owner = 'test';
    const repo = 'issue-bot';

    const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues/comments/10`);

    const params = context.issue({ body: data.body });

    return context.octokit.issues.createComment(params);
  });
};
