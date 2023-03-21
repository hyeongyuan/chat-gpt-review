module.exports = (app) => {
  app.on("issues.opened", async (context) => {
    const params = context.issue({ body: "Hello World" });

    console.log(params);

    return context.octokit.issues.createComment(params);
  });
};
