# Vercel's CEO Just Unveiled The Greatest AI Coding Workflow Ever | AI LABS | 861s

- Link: https://www.youtube.com/watch?v=y2ifUC9_zuU
- Idioma da transcrição: inglês (original)

## Descrição do vídeo

```
The AI coding workflow of Vercel's CEO, broken into 7 tips. We turn his approach to AI agents into an AI coding setup you can copy in Claude Code: direction checks, breaker agents, first-time-user testing and more, with lessons for software engineering at any level.

Thanks to Viktor for sponsoring. Hire your own AI employee at https://ref.viktor.com/ailabs-yt and get $100 in free credits with code AILABS100.

Community with All Resources: https://ailabspro.io/?v=y2ifUC9_zuU

The Roundup, our daily newsletter covering the AI stories that matter. Join now: https://www.theroundup.so/

Got a software idea but don't have the team to build it? Autometa turns your ideas into production-ready software. Check out https://autometa.dev/yt to see what we can build for you.

The CEO of Vercel gave an interview about how he works with AI agents. It's one of the most useful AI coding interviews we've seen, so we went through all of it and pulled out the 7 tips that actually help when you're coding with AI:

1. Test before you choose. He tests every idea in a new project and has an agent check from scratch whether it works. That goes for picking models too. You don't find the best AI for coding by going off vibes or a prompting guide. You test it yourself. We do the same thing by building an MVP before we commit to the whole app.

2. Direction check. Tokens spent and changes shipped show how much you're building, not where it's going. We turn this into a direction command that checks your app against your PRD and requirement docs, then gives you a scorecard and a to-do list.

3. Careful zones. Security debt and slop debt grow fast when agents write the code. Run a security scan after every feature (Vercel built DeepSec for this) and put quality gates on the parts of your app that matter most.

4. Say what you won't trade off. Add a must-not-trade-off section to your CLAUDE.md, and back each rule with a test so the agent can't skip it.

5. Breaker agent. An AI coding agent whose only job is to break your app on purpose. It works on copies of your data, so your real data stays safe.

6. First-time-user agent. An agent that uses your app like a brand-new customer would. A hook blocks it from reading your code, so its feedback stays honest. A second agent tracks error-free sessions across every flow your customers have to get through.

7. Feedback triage. Connect Claude to Gmail and Sentry through MCP servers. Clear bugs get fixed straight away, and anything that needs your judgment comes to you.

AI vibe coding is easy when you're the only user. These tips are for when real customers show up. Most of them are easy AI coding wins: each one starts with a single prompt to your agent. We use Claude Code, but the ideas aren't tied to any one coding AI. They work with whatever AI coding tools you already use, from ChatGPT and other OpenAI tools to a free AI coding plan. If you want to build real products with artificial intelligence, this is how someone running a major software company does it.

00:00 Intro
00:51 Test Ideas First
02:18 Stay on Course
04:01 Sponsor
04:57 Security Debt
07:14 Non-Negotiables
08:33 Breaker Agent
10:26 First-Time User Agent
12:42 Customer Feedback

Hashtags
#ai #claude #chatgpt #openai #vibecoding #aiagent #artificialintelligence #aicoding
```

## Transcrição completa

[00:00] The CEO of Versil gave an interview
[00:02] where he talked about how he works with
[00:04] AI agents. And interestingly, he said
[00:06] that most people judge how well they're
[00:08] building with AI by a number that
[00:10] doesn't matter nearly as much as they
[00:12] think. That's because the number only
[00:14] tells you how much you're building, not
[00:16] where it's taking you. So, what he cares
[00:17] about is whether all that work is
[00:19] actually heading where you planned it to
[00:21] go. And we turn that idea into one
[00:23] command you can run yourself. But that's
[00:25] not even the most surprising thing he
[00:26] does. One of them sounds absurd when you
[00:28] first hear it. But once you understand
[00:30] why he does it, it turns out to be one
[00:32] of the most valuable tips in the whole
[00:34] interview. And that's just one of the
[00:36] many things he talked about. So, we went
[00:37] through all of it and pulled out the
[00:39] seven tips that are genuinely helpful.
[00:41] If this is your first time, we're a
[00:43] software company and this is our
[00:44] channel, AI Labs. And in this video,
[00:46] we're going over each of his seven tips
[00:48] and how you can set them up for
[00:50] yourself. The [snorts] first tip from
[00:51] his interview is about testing things
[00:53] before you choose to go with them. He
[00:55] said that whenever he gets an idea, he
[00:57] makes a new project for it and tests his
[00:59] ideas in there. Then he has an agent
[01:01] check from scratch if it really works
[01:03] instead of trusting what anyone says
[01:05] about it. Now, you might wonder why he
[01:07] doesn't just go with what everyone's
[01:08] saying. He said a lot of people just go
[01:10] off vibes with models. He heard about
[01:12] someone who read a prompting guide that
[01:14] said Astra does better with a certain
[01:16] kind of prompt, so they started
[01:18] prompting it that way, but they never
[01:20] checked if that was actually true.
[01:21] testing it himself matters to him
[01:23] because that's how he knows what really
[01:25] works and what doesn't. We also do the
[01:27] same thing whenever we have a new
[01:28] project. We always start with a specs
[01:30] folder that holds the PRD file. This
[01:32] file lists all the main features we plan
[01:34] to add to the app. So, it's the first
[01:36] document for every project we make. But
[01:38] if you take that PRD and jump straight
[01:40] into building the whole app, you'll find
[01:42] out really late that the idea itself had
[01:44] problems. This also hurts all your early
[01:46] decisions. If any of them turns out to
[01:48] be wrong, everything else is already
[01:50] built on top of it. So fixing it means
[01:52] going back through the whole app. So
[01:54] whatever app we're building, we always
[01:56] start by asking claude code or whichever
[01:58] agent we're using to make an MVP and we
[02:01] give it all the basic features in the
[02:02] prompt. An MVP is basically the first
[02:05] working version of your app where you
[02:07] quickly build the features to see how
[02:09] your idea really looks once it's built.
[02:11] This is the point where we can see if
[02:12] the app is even worth building and if
[02:14] it's not we can just drop the idea
[02:16] without wasting much effort. The second
[02:18] tip is about making sure everything you
[02:20] build is taking your app in the right
[02:22] direction. He said a lot of people judge
[02:24] their progress by how many tokens they
[02:26] spend or how many changes they ship and
[02:28] those are fine numbers to track. But
[02:30] they only tell you how much you're doing
[02:32] and not where it's taking you. This
[02:33] means you can keep shipping and still be
[02:35] going nowhere. This matters way more now
[02:37] because with agents building is the
[02:39] cheap part. You can ask Claude for a new
[02:41] feature and have it working in a few
[02:42] minutes. So every idea you get while
[02:44] you're building turns into a feature and
[02:46] every new feature feels like progress.
[02:48] And Claude won't stop you because it
[02:50] builds whatever you ask for and it has
[02:52] no idea which of those features really
[02:54] matter for your app. But you already
[02:56] have the plan in your specs folder with
[02:58] all the requirement documents and the
[03:00] PRD. The problem is that once you start
[03:02] building, the app can slowly move away
[03:04] from that plan into features that don't
[03:06] even matter for your app. So to stop
[03:08] that from happening, you can ask your
[03:10] agent to create a command called
[03:12] direction that checks if what you've
[03:14] built is drifting off course or still
[03:16] matches the plan. You also need to tell
[03:18] it where you're keeping the plan folder.
[03:20] When you send that prompt, it creates
[03:22] the command for you and puts it in the
[03:23] commands folder inside the claude
[03:26] folder. If you're on claude code, then
[03:27] when you run the reload plug-in command
[03:29] in claude code, it loads this command
[03:31] into your session. After that, you can
[03:33] run the direction command and it goes
[03:35] through all the requirement documents in
[03:37] the folder with a separate agent for
[03:39] each one. The main agent then checks by
[03:41] itself for any changes that aren't in
[03:43] any of your plans. When all the agents
[03:44] finish, it gives you a full report that
[03:46] tells you if the app is off course or
[03:48] not. It also gives you a scorecard and a
[03:50] list of everything you need to do. From
[03:52] this report, you can either keep the
[03:54] drift and update your requirement
[03:56] documents to match it, or you can remove
[03:58] those changes if you think they've gone
[03:59] too far from your plan. But before we
[04:01] move on to the next one, let's have a
[04:03] word by our sponsor, Victor. Most AI
[04:05] tools stop at the answer. They write you
[04:07] the code, and then you're the one who
[04:09] opens the editor, pastes it in and
[04:11] deploys it yourself. Victor fixes that.
[04:13] Victor isn't a tool. He's a hireer, an
[04:15] AI employee who lives in Slack and
[04:17] Microsoft Teams. He runs his own
[04:19] computer in the cloud, so he can
[04:21] actually do the work instead of
[04:22] describing it. We mentioned him in a
[04:24] channel the way you'd message a teammate
[04:26] and asked for a small web app to collect
[04:28] our video ideas with a database behind
[04:30] it. Victor put it together and came back
[04:32] asking for the go-ahad before deploying.
[04:34] We approved it and 10 minutes later a
[04:36] working link was sitting in the thread
[04:38] ready for the team to start dropping
[04:40] ideas in. He connects to 3,200 plus
[04:43] tools and remembers your setup between
[04:45] tasks so you're not reexplaining the
[04:47] company every morning. You get $100 in
[04:50] free credits with no card needed. Go and
[04:52] hire Victor at victor.com and use code
[04:54] ailabs 100 links in the description.
[04:57] [snorts] The third tip is about security
[04:59] which is something he talked about a
[05:01] lot. He said one of the biggest
[05:02] challenges for himself and for Versil is
[05:05] understanding the security debt.
[05:07] Security debt is basically all the
[05:09] security problems that grow when you're
[05:11] working with agents. And it's getting
[05:12] worse because agents are writing more
[05:15] code than was ever possible before. So
[05:17] no one can go through all of that code
[05:19] by themselves to find problems. But the
[05:21] people trying to break into your app
[05:23] have agents, too. Models have gotten so
[05:26] good and so cheap at finding security
[05:27] holes that anyone who wants to cause
[05:29] harm can use them to find problems in
[05:31] your app. So, his advice is to get ahead
[05:34] of this and start protecting your code
[05:36] as much as you can. The first rule is to
[05:38] run security scans on your app after you
[05:40] finished building a feature. Versel
[05:42] actually made their own tool for this,
[05:44] which is called DeepSseec, and it finds
[05:45] security gaps in the code that the agent
[05:47] built. We've used this tool before too
[05:50] and we already have a whole video on
[05:51] deepseac that you can check out on the
[05:53] channel. You can make your own ways of
[05:55] checking security but if you want to use
[05:57] deepseec it's really easy to set up too.
[05:59] You just need to run deepseec setup
[06:01] command which creates a deepseec folder
[06:04] in your project. It gives you a prompt
[06:06] that you paste into claude code so that
[06:08] claude writes a short file about your
[06:10] app and how people sign into it. Then
[06:12] you ask claude to run the scan and
[06:13] claude runs all the scans for you. Once
[06:16] that's done, it gives you a full report
[06:18] on what it found. Now, the second rule
[06:19] is about deciding how careful you need
[06:21] to be with each part of your app. He
[06:23] said you need to understand how much
[06:25] slop debt you're taking on. Slop debt is
[06:28] basically all the messy code you choose
[06:30] to accept so that you can build fast.
[06:32] For a small app, that isn't a big
[06:34] problem, but you need to be really
[06:35] careful with the most important parts of
[06:37] your product. That's because your
[06:39] customers need to know their data is
[06:40] safe and the app is built really well.
[06:43] You can do this by setting up quality
[06:44] checks before you build the app. There
[06:46] are many ways to set this up, and we've
[06:48] covered a lot of them on our channel
[06:49] before, but the best way is to set up
[06:51] quality gates. Tests only tell you if
[06:53] something works, but a quality gate also
[06:56] checks if it's good enough. It does this
[06:58] with things like a review agent that
[06:59] holds every change to your standards.
[07:02] And no change should go live until it
[07:04] passes every one of those gates. But
[07:06] before we go into the next tip, it would
[07:08] be great if you subscribe to the channel
[07:10] and hit the hype button. This small
[07:12] gesture of support goes a long way for
[07:14] us. The fourth tip is about deciding
[07:16] what you won't trade off. Whenever
[07:18] you're building an app, big or small,
[07:19] you're always trading one thing for
[07:21] another. You can add more features, but
[07:23] that takes more time. You can ship
[07:25] faster, but then something else has to
[07:27] give, like how polished the app is or
[07:28] how much it costs you, but there are
[07:30] some things you can't trade off at all
[07:32] because they really matter to what
[07:33] you're building. This is exactly what he
[07:35] talked about. He said, "Everything the
[07:37] agent builds comes with trade-offs like
[07:39] speed against safety. It can't spend
[07:41] unlimited effort on every task, so it
[07:43] has to pick. That's why you and the
[07:45] agent need to agree on your rules and
[07:47] tradeoffs before you start. He said your
[07:49] time should go into whether the app does
[07:51] what it's supposed to and how fast it
[07:53] needs to be. That's because if the model
[07:55] doesn't know what you want, it'll take
[07:57] you in whatever direction it wants. So,
[07:59] you need a separate must not trade-off
[08:00] section in the claw.md file in the main
[08:03] folder of your project. That's where you
[08:05] list all the important things your app
[08:07] has to have and the things you'd never
[08:08] give up. Now, this file is just written
[08:10] instructions for the agent to follow.
[08:12] But agents keep a lot of context in
[08:14] mind, so they tend to forget these
[08:16] rules. That's why every rule should come
[08:18] with a way for the agent to test if it's
[08:20] being met or not. So, to make sure the
[08:22] app still matches your plan, we made the
[08:24] direction command in an earlier section.
[08:26] You can also create the test files and
[08:28] commit them to Git, so the agent can't
[08:30] skip these rules. The fifth tip is about
[08:33] having an agent try to break your app on
[08:35] purpose. When Versil launched a new
[08:37] product, he didn't just check that it
[08:38] worked. He gave it to an agent and told
[08:40] it to try to break it by copying the
[08:42] pressure a site gets when lots of people
[08:45] use it at the same time. That means
[08:46] things like doing several things at once
[08:48] that might clash, measuring how slow it
[08:51] got, and comparing it with other
[08:52] products. He said, "This matters because
[08:54] when a model is writing the code, it's
[08:56] really easy to write code that only
[08:58] works when everything goes right. But
[09:00] it's really hard to think of every way
[09:02] it can go wrong, like someone skipping a
[09:04] step or doing two things at once. That's
[09:06] exactly how your agent tests its own
[09:08] work. It built the app to be used a
[09:10] certain way. So when it checks the app,
[09:12] it uses it that exact way and everything
[09:14] passes. But your customers don't use it
[09:16] that way. And once you have a lot of
[09:17] customers, problems come up that your
[09:19] agent never even thought to test. So you
[09:22] need to do the same thing and test your
[09:24] app in lots of different ways,
[09:25] especially in the situations that are
[09:27] sure to happen once your app is live. To
[09:30] do that, you need to create a breaker
[09:31] agent for yourself. You can ask
[09:33] whichever agent you're working with to
[09:35] create one, and you need to tell it that
[09:37] its main job is to break the app on
[09:39] purpose and then tell you every way it
[09:41] managed to break it. Basically, it
[09:42] attacks your own app the way someone
[09:44] outside would. So, it can find all the
[09:46] weak spots before anyone else does. This
[09:48] helps because if your agent finds a way
[09:50] to break your app, you can fix it. But
[09:52] if someone else finds it first, it could
[09:54] cost you a lot. But what if it breaks
[09:55] your real data while it's attacking?
[09:57] When you give it the prompt, it creates
[09:59] the agent in a way that makes copies of
[10:01] the app's data so your real data stays
[10:03] safe. Once this agent is ready, you can
[10:06] just ask Claude to run the breaker agent
[10:08] and it starts a separate agent in its
[10:10] own context window to stress test the
[10:12] app. When it's done, it reports
[10:14] everything back. Then you can ask it to
[10:16] fix the problems and run the tests again
[10:18] to make sure none of them come back. You
[10:20] can also ask your agent to run a review
[10:22] loop with the breaker agent where it
[10:24] keeps finding and fixing problems. The
[10:26] sixth tip is about seeing your app the
[10:28] way a new customer does. He said one of
[10:30] the values at Versil is knowing your
[10:32] customer. And he explained what that
[10:34] means when you're building with AI. He
[10:36] said it's really easy to build when
[10:38] you're the only customer because all
[10:39] you're checking is whether you like the
[10:41] app or not. But it's a completely
[10:42] different thing once you're selling it
[10:44] to other people. That's why one of his
[10:46] favorite numbers to track is error-free
[10:48] sessions, which is basically how many
[10:50] people get all the way through your app
[10:52] without anything going wrong. And he
[10:54] uses agents for exactly this. Whenever
[10:56] Versel makes something new, he has an
[10:58] agent go and try it and then he asks it
[11:00] to tell him what he could have done
[11:02] better. This matters because you can
[11:04] never be a firsttime user of your own
[11:06] app. You built it so you already know
[11:07] where every button is and what every
[11:09] page is for. But a new customer knows
[11:11] none of that. So if the signup page asks
[11:14] for something confusing, you'd never
[11:16] notice because you never get stuck
[11:17] there. Your customer gets stuck and
[11:19] leaves the app and you never learn why.
[11:21] To test your app the way they do, you
[11:23] can ask Claude Code to create an agent
[11:25] that uses the app as a firsttime user
[11:28] and tests everything without knowing
[11:30] anything about what the app does. It
[11:32] only runs the app in a browser and finds
[11:34] all the places where a new user might
[11:36] struggle. This really matters because it
[11:38] helps you make the app easier to use and
[11:40] lead people to where you want them to
[11:42] go. But if this agent could read your
[11:44] code, it would already know how
[11:46] everything works. So, it wouldn't really
[11:48] be a firsttime user. That's why this
[11:49] agent is blocked from reading the app
[11:51] and the only thing it's allowed to do is
[11:53] run it. This is done with a hook that
[11:55] stops the agent from using its bash tool
[11:57] for anything other than running the app.
[11:59] If it tries to edit the app or delete
[12:01] any code, the hook blocks it. This way,
[12:03] you get honest feedback on the app
[12:05] you've built, and you can run this agent
[12:06] to see where users get stuck. But
[12:08] finding where people get confused is
[12:10] only half of it. To actually track the
[12:12] error-free sessions he talked about, you
[12:14] need a separate agent that runs browser
[12:16] tests for all the steps every customer
[12:18] has to get through and reports the
[12:20] results. This really matters because it
[12:22] helps you find problems like slow steps,
[12:24] steps that don't work or flows that
[12:26] break halfway. Whenever something isn't
[12:28] working properly, the agent can find it
[12:30] and write the code to fix it. It tests
[12:32] each of those paths from start to finish
[12:34] and saves the results in a JSON file.
[12:36] This also helps you judge how well the
[12:38] app performs and you need to run it
[12:40] every time before you ship. The seventh
[12:42] and final tip is about how fast you act
[12:45] on what your customers tell you. He
[12:46] said, "One of the best ways to tell how
[12:48] well a company is using agents is to
[12:50] look at what happens when a customer
[12:52] reports a problem. You need to check if
[12:54] someone replies to them properly and
[12:55] checks what went wrong. If it's a clear
[12:57] problem, it should actually get fixed.
[12:59] And most of all, you need to check how
[13:01] long all of that takes from the moment
[13:03] the report comes in. Now, the feedback
[13:05] you get from your customers isn't all
[13:07] the same. Sometimes a customer sends you
[13:09] a screenshot of a button that isn't
[13:11] working, and there's no thinking needed
[13:13] there. So, you just need to fix it as
[13:15] fast as you can. But other times, a
[13:17] customer tells you they're confused by
[13:18] your app. You can't really turn that
[13:20] into a prompt. So, you actually have to
[13:22] talk to them and understand what they
[13:24] mean before you change anything. So, to
[13:26] handle both of these, you can connect
[13:27] Claude to the places your feedback comes
[13:29] from using MCP servers. For example, you
[13:32] can connect the Gmail MCP so it can read
[13:34] your support emails. You can also
[13:36] connect the Sentry MCP, which reports
[13:38] every error your app hits, even if no
[13:41] customer has said anything about it.
[13:42] Once that's connected, Claude reads each
[13:44] new report as it comes in and sorts it.
[13:47] If something is actually broken, like a
[13:48] payment failing, it fixes it straight
[13:50] away. And if it needs your judgment,
[13:52] Claude sends it to you so you can decide
[13:54] what to do with it. Now, all the agents
[13:56] and skills you saw in this video are all
[13:58] available for you to use in AIABS Pro,
[14:01] which is our community. So, if you found
[14:03] value in what we do and want to support
[14:05] the channel, this is the best way to do
[14:07] it. The links in the description. That
[14:09] brings us to the end of this video. If
[14:11] you'd like to support the channel and
[14:12] help us keep making videos like this,
[14:14] you can do so by using the super thanks
[14:16] button below. As always, thank you for
[14:18] watching and I'll see you in the next
[14:20] one.
