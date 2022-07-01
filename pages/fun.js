import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const fun = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Fun' />
      <h2>A user writes in with the following problem: “On our team, GitHub commits by user janedoe@helloworld.com don&apos;t trigger any deployments. Commits by other users work fine. Other projects work fine. Help! What can we do to fix this?” How would you approach debugging this problem? What questions would you ask, either internally or of the user? Write a response which you would send back to this user.</h2>
      <ul className={styles.card_vert}>
        <li>
          <p>Looking through Vercel&apos;s documentation I see that there is a KB article regarding <a className={styles.inbedded_link} href="https://vercel.com/support/articles/why-aren-t-commits-triggering-deployments-on-vercel" target='_blank' rel="noreferrer">issues with committing</a>.</p>
        </li>
        <li>
          <p>One of the points on this list looks to fit the issue being described by the customer, regarding private repos. The issue may be that the user is not part of the team that is assigned to this specific Vercel project.</p>
        </li>
        <li>
          <p>I would start by asking if the user, janedoe@helloworld.com is seeing any error messages when trying to push her commits to the repository. Or if they are seeing any logging in the Vercel dashboard when this user pushes a commit to the repo. (This may come in handy later if we need to further dig into the issue if we cannot easily troubleshoot this issue from the KB)</p>
        </li>
        <li>
          <p>I would then ask if the github repository is public or private. If it is private, I would ask if this user is part of the Vercel team that belongs to the project they are working on.</p>
        </li>
        <li>
          <p>If the repo is public, or if the user is part of the team on that project, we can then ask if the user made any changes to the vercel.json file or if they made any changes to environmental variables. If so the changes may need to be authorized before the commit will deploy. To check for this, they should look at the pull request where a comment with a link to authorize the deployment will be.</p>
        </li>
        <li>
          <p>Past this point, I am unsure if we would have logs to give us a clearer picture on why the user is unable to deploy their commits. If there are I would check these to see if we are getting an error message indicating why the user is unable to deploy. I would also check previous tickets for this issue and our internal KB to see if we can determine why the users commits are not deploying on this project. We can also ask the team to see if anyone has seen this previously. We can use google to see if there are any stackoverflow or other types of forums where this issue may have been discussed previously. If we run out of runway in our resources for identifying the issue we should escalate the issue to engineering to see if we can determine the root cause of the issue and determine a fix.</p>
        </li>
      </ul>
      <div className={styles.link}><Link href='/customerissues'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default fun
