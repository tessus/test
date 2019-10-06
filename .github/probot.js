on('issues.opened')
  .comment(`
Hey  @{{ sender.login }}!

This is just a test.
  `);

/**
 * Minimize comment length
 */
/*
on('issue_comment.created')
  .filter(context => context.payload.comment.body
    .trim()
    .replace(/\s+/gi, ' ')
    .split(' ')
    .length > 200
  )
  .comment(`
Thanks for your comment, @{{ sender.login }}!
Your reply is very long, and even if for me it takes less than a second to
read it, summarizing it a bit will help old-fashioned humans. :smiley:
  `);
  */
