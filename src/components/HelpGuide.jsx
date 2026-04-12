import { useLocale } from '../i18n/LocaleContext'

function GuideJa() {
  return (
    <div className="text-stone-700 text-sm leading-relaxed space-y-4 pb-8">
      <p>
        この説明では、<strong>やることひとつひとつ</strong>のことを「
        <strong>やること</strong>」、名前を付けてまとめる箱のことを「
        <strong>グループ</strong>」とよびます（※画面のボタンなどには「タスク」「リスト」という言葉が出てくることがありますが、意味は同じです）。
      </p>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          このアプリでできること
        </h2>
        <p>
          <strong>「いま何をするか」がひとつだけはっきりする</strong>
          お手伝いです。あとでやる順番を決めたり、締め切りを並べたりはしません。
          <strong>上から順に片付けて、終わったものはいったん列の後ろへ回す</strong>
          だけの、やさしい流れです。くよくよしなくてよいように作られています。
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          画面の大きな流れ
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>はじめの画面（グループの一覧）</strong>
            <br />
            仕事用・勉強用・家事用のように、
            <strong>名前の付いたグループを最大 3 つ</strong>まで持てます。
          </li>
          <li>
            <strong>グループを選ぶ</strong>
            <br />
            付けた名前をタップすると、そのグループの<strong>やること画面</strong>
            に入ります。
          </li>
          <li>
            <strong>やること画面</strong>
            <br />
            <strong>いちばん上</strong>が「いま取り組むやること」です。その下は
            <strong>「このあと」</strong>に並んだ予定です。
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          はじめの画面（グループの一覧）でできること
        </h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>新しいグループを増やす</strong>
            <br />
            名前を入れて、画面に出てくる <strong>「リストを作成」</strong>
            を押します。何も書かずに作ると、名前は自動で付きます。
          </li>
          <li>
            <strong>名前の変更・消去</strong>
            <br />
            右側の <strong>えんぴつマーク</strong>（名前を変える）と{' '}
            <strong>ゴミ箱マーク</strong>（このグループごと消す）を押します。
          </li>
          <li>
            <strong>日本語と英語</strong>
            <br />
            右上の <strong>「日本語」／「English」</strong>
            で、画面の言葉を切り替えられます。選んだ方は、次に開いたときも覚えています。
          </li>
          <li>
            <strong>すべて消す</strong>
            <br />
            画面下の <strong>「すべてのデータを削除」</strong>
            から、グループもやることも
            <strong>まとめて消せます</strong>
            （あとから元に戻せません。本当にいいときだけ使ってください）。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          やること画面でできること
        </h2>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          マークでわかる操作（共通）
        </h3>
        <p>
          画面に <strong>「編集」「削除」という文字だけ</strong>
          は出ません。かわりに、次のマークが使われています。
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs border border-stone-200 rounded-lg">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-2 border-b border-stone-200">見た目</th>
                <th className="text-left p-2 border-b border-stone-200">意味</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-stone-100">
                  <strong>えんぴつマーク</strong>
                </td>
                <td className="p-2 border-b border-stone-100">
                  名前を<strong>変える</strong>ための操作を始めます。
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-stone-100">
                  <strong>ゴミ箱マーク</strong>
                </td>
                <td className="p-2 border-b border-stone-100">
                  <strong>消します</strong>
                  。やることによっては「本当に消しますか？」と確認が出ます。
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <strong>縦に並んだ三点「⋮」</strong>
                </td>
                <td className="p-2">
                  <strong>そのほか</strong>
                  のメニューを開きます（いちばん上の大きなカードだけ）。開くと、中は
                  <strong>えんぴつとゴミ箱のマークだけ</strong>
                  です（「編集」「削除」という文字は付きません）。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>「このあと」</strong>
          の各行では、やることの名前の右に
          <strong>えんぴつとゴミ箱</strong>
          がそのまま並びます（ここにも「編集」「削除」という文字はありません）。
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          いまのやること（上の大きなカード）
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>完了</strong> … 「今、ひと区切りついた」という記録が付き、
            <strong>列のいちばん後ろ</strong>
            に回ります（あとでまた順番が来ます）。
          </li>
          <li>
            <strong>スキップ</strong> … やることが{' '}
            <strong>2 つ以上</strong>
            あるときだけ出ます。いまのやることを
            <strong>いったん後ろへ回して</strong>
            、次を上に出します（「完了した」記録は付きません）。
          </li>
          <li>
            <strong>やることの名前</strong>を押す … 名前を変える画面に入ります。
          </li>
          <li>
            <strong>⋮（縦三点）</strong> … <strong>そのほか</strong>
            を開きます。中は <strong>えんぴつ</strong>（名前を変える）と{' '}
            <strong>ゴミ箱</strong>（このやることを消す）のマークだけです。
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          「このあと」のやること
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            名前の右の <strong>えんぴつ</strong>と<strong>ゴミ箱</strong>
            を押すと、それぞれ名前の変更・消去です。
          </li>
          <li>
            <strong>順番を入れ替える</strong> … 「このあと」の右側にある
            <strong>矢印のスイッチ</strong>
            をオンにすると、各行の<strong>上／下</strong>
            のボタンで順番を入れ替えられます（「いまのやること」とは入れ替わりません）。
          </li>
          <li>
            <strong>いつ完了したか（日付・時刻）</strong> … 時計のスイッチで、それぞれのやることに出る
            <strong>完了の日付・時刻</strong>
            を見せたり隠したりできます。矢印や時計のオン・オフは、
            <strong>グループごと</strong>に覚えられます。
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          やることを足す
        </h3>
        <p>
          画面下に名前を入れて <strong>「タスク追加」</strong>
          を押すと、そのグループの<strong>いちばん後ろ</strong>に足せます。
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          ひとつ前の画面に戻る
        </h3>
        <p>
          左上の <strong>←</strong>{' '}
          を押すと、グループの一覧の画面に戻ります。
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          使い方のイメージ
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>「完了」</strong> …
            今日はここまで、と一区切りつけたいときに押すイメージです。やることは
            <strong>列の後ろ</strong>へ回り、あとからまた順番が来ます。
          </li>
          <li>
            <strong>「スキップ」</strong> …
            今はほかの用事を先にしたいとき、順番だけ後ろへ送るイメージです。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          書いた内容の保存について
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            入れたやることやグループの名前は、
            <strong>このアプリを開いている同じ携帯・同じパソコンの中</strong>
            にだけ残る想定です。名前やパスワードでログインする仕組みはありません。
          </li>
          <li>
            <strong>別の携帯や別のパソコン</strong>
            には、自動ではうつりません。家族の機械と共有したい場合は、同じ機械で開くか、別の方法で伝える必要があります。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          困ったとき
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            英語にしたい・日本語に戻したい → グループ一覧かやること画面の{' '}
            <strong>「日本語」／「English」</strong> を押してみてください。
          </li>
          <li>
            順番を変えるボタンや、日付が見えない →{' '}
            <strong>「このあと」</strong>
            の行の右側にある、時計と矢印のスイッチが消えていないか見てください。
          </li>
        </ul>
      </section>

      <p className="mt-6 pt-4 border-t border-stone-200 text-stone-600">
        はじめての方は、
        <strong>
          グループを 1 つ作り → やることを 2〜3 個入れて →「完了」と「スキップ」を一度ずつ試す
        </strong>
        と、全体の感覚がつかみやすいです。
      </p>
    </div>
  )
}

function GuideEn() {
  return (
    <div className="text-stone-700 text-sm leading-relaxed space-y-4 pb-8">
      <p>
        In this guide, each item you do is called a <strong>“to-do”</strong>,
        and each named group is called a <strong>“group”</strong>. (The app may
        still say “task” or “list” on some buttons—the idea is the same.)
      </p>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          What this app helps with
        </h2>
        <p>
          It helps you see <strong>one clear “what to do now.”</strong> It does
          not rank due dates or priorities. You just{' '}
          <strong>
            work from the top down, and when something is done for now, it moves
            to the back of the line
          </strong>
          . It is meant to be simple and low-stress.
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          How the screens fit together
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>First screen (your groups)</strong>
            <br />
            You can have up to <strong>three named groups</strong>, for example
            work, study, or home.
          </li>
          <li>
            <strong>Opening a group</strong>
            <br />
            Tap a name to open that group’s <strong>to-do screen</strong>.
          </li>
          <li>
            <strong>To-do screen</strong>
            <br />
            The <strong>top</strong> item is what you focus on now. Below that,
            <strong> “Up next”</strong> shows what comes later.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          On the first screen (group list)
        </h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Add a group</strong>
            <br />
            Type a name and tap <strong>“Create list”</strong>. If you leave the
            name blank, a name is filled in for you.
          </li>
          <li>
            <strong>Rename or remove</strong>
            <br />
            Use the <strong>pencil</strong> (rename) or <strong>trash</strong>{' '}
            (delete the whole group) on the right.
          </li>
          <li>
            <strong>Japanese and English</strong>
            <br />
            Use <strong>“日本語” / “English”</strong> at the top right. Your
            choice is remembered the next time you open the app.
          </li>
          <li>
            <strong>Delete everything</strong>
            <br />
            At the bottom, <strong>“Delete all data”</strong> removes all groups
            and to-dos at once (<strong>this cannot be undone</strong>—use only
            when you are sure).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          On the to-do screen
        </h2>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          What the symbols mean
        </h3>
        <p>
          You will <strong>not</strong> see the words “Edit” or “Delete” by
          themselves. Instead, these symbols are used:
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs border border-stone-200 rounded-lg">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-2 border-b border-stone-200">Look</th>
                <th className="text-left p-2 border-b border-stone-200">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-stone-100">
                  <strong>Pencil</strong>
                </td>
                <td className="p-2 border-b border-stone-100">
                  Start changing a name.
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-stone-100">
                  <strong>Trash</strong>
                </td>
                <td className="p-2 border-b border-stone-100">
                  Delete. Sometimes the app asks “Are you sure?” first.
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <strong>Three dots ⋮</strong>
                </td>
                <td className="p-2">
                  Open <strong>More</strong> (only on the big top card). Inside
                  you only see the <strong>pencil and trash</strong>—still no
                  “Edit”/“Delete” text labels.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In the <strong>“Up next”</strong> list, the pencil and trash sit to
          the right of each name (again, no extra text labels).
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          Current to-do (large card on top)
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Done</strong> … Marks progress for now and sends the item
            to the <strong>back of the line</strong> (it will come around again
            later).
          </li>
          <li>
            <strong>Skip</strong> … Only when there are{' '}
            <strong>two or more</strong> to-dos. Sends the current one backward
            without a “done” record so another item can be on top.
          </li>
          <li>
            Tap the <strong>to-do name</strong> … Opens name editing.
          </li>
          <li>
            <strong>⋮</strong> … Opens <strong>More</strong>: only pencil
            (rename) and trash (delete this to-do).
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          “Up next” items
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Pencil and trash on the right: rename or delete that row.
          </li>
          <li>
            <strong>Reorder</strong> … Turn on the <strong>arrow switch</strong>{' '}
            next to “Up next,” then use the <strong>up / down</strong> buttons
            on each row (they do not swap with the current top to-do).
          </li>
          <li>
            <strong>When you finished (date &amp; time)</strong> … The clock
            switch shows or hides that information for each item. Arrow and clock
            settings are saved <strong>per group</strong>.
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          Add a to-do
        </h3>
        <p>
          At the bottom, type a name and tap <strong>“Add task”</strong> to add
          it at the <strong>end</strong> of the group.
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          Go back
        </h3>
        <p>
          Tap <strong>←</strong> at the top left to return to the group list.
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          How to think about it
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“Done”</strong> … For when you want to say “that’s enough
            for now.” The item goes to the <strong>back of the line</strong> and
            comes back in turn later.
          </li>
          <li>
            <strong>“Skip”</strong> … For when you want to do something else
            first—only the order changes.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          Where your entries are kept
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            What you type stays on <strong>the same phone or computer</strong>{' '}
            where you open this app. There is no sign-in with a name and
            password.
          </li>
          <li>
            It does <strong>not</strong> copy itself to another phone or
            computer by itself. To share with family, use the same device or tell
            them in another way.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          If something seems wrong
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            To switch language: try <strong>“日本語” / “English”</strong> on the
            group list or the to-do screen.
          </li>
          <li>
            If reorder or dates are missing: check that the clock and arrow
            switches on the <strong>“Up next”</strong> row are not turned off.
          </li>
        </ul>
      </section>

      <p className="mt-6 pt-4 border-t border-stone-200 text-stone-600">
        <strong>New to the app?</strong> Try making{' '}
        <strong>
          one group, two or three to-dos, then tap “Done” and “Skip” once each
        </strong>
        —that usually makes the flow easy to feel.
      </p>
    </div>
  )
}

export default function HelpGuide({ onClose }) {
  const { locale, t } = useLocale()

  return (
    <div className="flex flex-col min-h-dvh bg-stone-50 safe-area-pb">
      <header className="flex items-center gap-2 px-4 py-3 border-b border-stone-200 bg-white/90 backdrop-blur shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-2 rounded-lg bg-stone-100 text-stone-700 text-sm font-medium hover:bg-stone-200"
          aria-label={t('help.backAria')}
        >
          {t('help.close')}
        </button>
        <h1 className="text-lg font-medium text-stone-800 flex-1 m-0">
          {t('help.title')}
        </h1>
      </header>
      <main className="flex-1 overflow-auto px-4 pt-4">
        {locale === 'ja' ? <GuideJa /> : <GuideEn />}
      </main>
    </div>
  )
}
