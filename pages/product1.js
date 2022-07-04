import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const product1 = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Next Quarters Focus' />
      <h2> Imagine that you are the most senior support engineer within a team of 3 people. As the principal, and as platform usage and customer volume grows, you&apos;re helping to determine the focus of the team for the following quarter. From this list, pick the 5 highest prioritized actions and 5 lowest prioritized actions you&apos;d lead the team on. Explain why you chose those prioritization levels. </h2>
      <h3>Top 5 Tasks</h3>
      <ul className={styles.card}>
        <li>
          <h4>Run ticket review sessions to make sure tone is consistent</h4>
          <p>I feel this is one of the most important tasks on this list. Ticket reviews help support engineers get the help they need on difficult tickets, keep them on track with SLAs, can present teachable moments, helps to keep the correct tone and professionalism in their customer responses, can identify areas of weakness that need to be worked on, identifies areas of strengths that can be highlighted, and helps to keep back logged ticket counts low.</p>
        </li>
        <li>
          <h4>Write and maintain support articles and docs pages</h4>
          <p>In my opinion a strong support team is only as strong as its resources available. One of the greatest resources a support team has is a KB. Not just internal facing however, but customer facing as well. It is extremely beneficial to be able to provide a customer not with just an explanation, but screenshots and supporting documentation that they can view themselves. Maintaining and building up a strong KB or FAQ should be a goal and focus every quarter and should be a high priority.</p>
        </li>
        <li>
          <h4>Scheduling time-off coverage and collaborating as part of a growing cohesive support team</h4>
          <p>Maintaining proper queue coverage is important, but I choose this option more so for the collaboration aspect. Now that most companies are remote there is less interpersonality between co-workers. It is important to find ways to keep the team coming together to discuss tickets, to talk about themselves, and overall know that there are other people who can help them throughout their work day. It is important to feel like you are part of a team and not just a remote employee who is given instructions to follow throughout the day. Huddles are one of my favorite ways to keep the team on the same page and working together on issues. In my current role we have two huddles every day, one in the morning to go over important updates and then to discuss our game plan for the day, and a second to discuss difficult tickets that we are stuck on or need another set of eyes. Having our own channel in Slack also helps out as it feels like a personal space just for us to talk about tickets we have questions on, or just to talk about funny things that pop into our heads. Collaboration is a very important dynamic to a team&apos;s culture to help improve knowledge sharing and to encourage good communication skills.</p>
        </li>
        <li>
          <h4>Help train and onboard new support teammates</h4>
          <p>I believe this is an important quarterly goal. Being a part, or leading the training and onboarding of new hires allows you to have a big impact on setting good habits and helping to identify and correct bad habits. Getting the new hire into a good rhythm early on will help them be successful in their new position and can be the difference between someone who has no idea what they are doing several months down the line and someone who is confident in their work and has a structured and efficient approach to working with customers, resolving issues, and contributes positively to the team as a whole.</p>
        </li>
        <li>
          <h4>Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites</h4>
          <p>This task struck me as an important part of the job. When I am looking for answers to questions I have or troubleshooting steps for software I am not as familiar with, I end up searching on google. Outside of a company&apos;s KB or FAQ tech forums, social media, and similar sites can be of great help, but only if someone is answering questions that have been posed. As a team it would not be unrealistic for each person to spend a short amount of time each week to search for different topics on google to look for questions customers or potential customers have asked about Vercel and its products, or issues they have encountered. Providing answers in these locations can have a large impact on how potential customers view the products they want to try and the brand as a whole.</p>
        </li>
      </ul>
      <h3>Bottom 5 Tasks</h3>
      <ul className={styles.card}>
        <li>
          <h4>Analyze hundreds of support tickets to spot trends the product team can use</h4>
          <p>I put this task on the bottom primarily because adding specific fields to identify the type of issues being reported can help in pulling metrics to show patterns with the types of issues being reported. I feel that this type of task can be done easier using metrics to spot trends and patterns rather than teammates spending large amounts of time looking through tickets to spot trends when there are better uses of time.</p>
        </li>
        <li>
          <h4>Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub</h4>
          <p>While I believe that this is important, I did not think this task was the most important on the list to be done in a quarter. Though I did not deem it most important, support engineers should always report potential bugs they find on the github repos, generally I would think these would be reported by customers on a ticket the engineer is working on anyways.</p>
        </li>
        <li>
          <h4>Work with the product team to develop a new feature based on feedback from customers</h4>
          <p>I think that this would be a very interesting task for a quarter, but based on the list of objectives I do not think this should be placed above most of the other tasks. While I do think this can help support engineers improve their skill set, helping customers, helping to grow the dynamic and collaboration of the team, and ensuring the team has strong resources available to me seem more important. As a side project however this could inspire a team member to be more enthusiastic about their role and helping them determine the path they would like to take as they progress within the company.</p>
        </li>
        <li>
          <h4>Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems.</h4>
          <p>Though this task could be a podcast or recorded as a video to later assist other customers on the same issues, I would not think this would be more important than other tasks on this list. I do think it would be something that could be done at least once a quarter, or every other quarter however.</p>
        </li>
        <li>
          <h4>Work with people to figure out if Vercel is suitable for their use case</h4>
          <p>I feel like this would come up naturally on tickets being submitted to support. While not the most important task on this list, I do think this topic is something support engineers should consider while troubleshooting issues. It is important however that support does not make the customer feel like Vercel offers them no value to their use case, we should be helping them better understand in what way Vercel will help their use case.</p>
        </li>
      </ul>
      <div className={styles.link}><Link href='/goals'>Lets move on to the next question</Link></div>
    </div>
  )
}

export default product1
