import { useLocale } from '../i18n/LocaleContext'

function GuideJa() {
  return (
    <div className="text-stone-700 text-sm leading-relaxed space-y-4 pb-8">
      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-2 mb-2 border-b border-stone-200 pb-1">
          名前の「じゅんぐり（順繰り）」とは
        </h2>
        <p>
          <strong>「じゅんぐり（順繰り）」</strong>とは、
          決められた順番で、ひとつずつ交代して（やることが順に入れ替わって）進めていくことを表す言葉です。
        </p>
        <ul className="list-disc pl-5 space-y-1 my-3">
          <li>どれか一つだけが続けて行われるのではなく、</li>
          <li>A → B → C → A → B → C… のように、</li>
          <li>順番がぐるぐる回っていくイメージです。</li>
        </ul>
      </section>

      <p>
        この説明では、<strong>やることひとつひとつ</strong>のことを「
        <strong>やること</strong>」、名前を付けてまとめる箱のことを「
        <strong>グループ</strong>」とよびます（※1件ずつについては画面に「
        <strong>タスク</strong>」と出ることがありますが、この説明での「やること」と同じ意味です）。
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
            付けた名前をタップすると、そのグループの<strong>タスク画面</strong>
            に入ります。
          </li>
          <li>
            <strong>タスク画面</strong>
            <br />
            <strong>いちばん上</strong>が「いま取り組むやること」です。やることが
            <strong>2 つ以上</strong>あるとき、その下に
            <strong>「このあと」</strong>に並んだ予定が続きます。
          </li>
          <li>
            <strong>（任意）この説明をアプリ内で読む</strong>
            <br />
            グループ一覧の<strong>一番下</strong>にある <strong>「使い方」</strong>
            を押すと、<strong>全画面</strong>でこの説明が開きます。
            <strong>「閉じる」</strong>で一覧に戻ります。
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
            名前を入れて、画面に出てくる <strong>「グループを作成」</strong>
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
            タイトル「じゅんぐりタスク」の右上の{' '}
            <strong>「日本語」／「English」</strong>
            で、画面の言葉を切り替えられます。選んだ方は、次に開いたときも覚えています。
          </li>
          <li>
            <strong>使い方（全画面）</strong>
            <br />
            画面<strong>一番下</strong>の右側、下線付きの <strong>「使い方」</strong>
            を押すと、説明画面が開きます。<strong>「閉じる」</strong>
            でこの一覧に戻ります。
          </li>
          <li>
            <strong>すべて消す</strong>
            <br />
            画面<strong>一番下</strong>の左側、{' '}
            <strong>「すべてのデータを削除」</strong>
            から、グループもやることも
            <strong>まとめて消せます</strong>
            （あとから元に戻せません。本当にいいときだけ使ってください）。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          タスク画面でできること
        </h2>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          上端（ヘッダー）
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>←</strong> … グループの一覧に戻ります。
          </li>
          <li>
            <strong>グループ名</strong> …
            タップすると名前を編集できます（入力欄・保存／キャンセル）。
          </li>
          <li>
            <strong>えんぴつマーク</strong> …
            グループ名の編集を始めます（タップと同じ目的の別の入り方です）。
          </li>
          <li>
            <strong>「日本語」／「English」</strong> …
            言語を切り替えます（一覧画面と同じく、次回も覚えています）。
          </li>
        </ul>
        <p>
          <strong>やることが 1 件だけ</strong>のときは、「このあと」という区切りは出ません。その代わり、
          <strong>最終完了の日付・時刻</strong>を見せるかどうかは、ヘッダーにある{' '}
          <strong>時計形のボタン</strong>で切り替えます。
        </p>

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
                <td className="p-2">
                  <strong>ゴミ箱マーク</strong>
                </td>
                <td className="p-2">
                  <strong>消します</strong>
                  。やることによっては「本当に消しますか？」と確認が出ます。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>いちばん上の大きなカード</strong>と
          <strong>「このあと」</strong>の各行では、やることの名前の右に
          <strong>えんぴつとゴミ箱</strong>
          がそのまま並びます（「編集」「削除」という文字だけは出ません）。
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
            名前の右の <strong>えんぴつ</strong> …
            名前を変える操作を始めます（名前タップと同じ目的です）。
          </li>
          <li>
            名前の右の <strong>ゴミ箱</strong> …
            このやることを消します（確認が出ます）。
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          「このあと」のやること（やることが 2 つ以上のとき）
        </h3>
        <p>
          見出し <strong>「このあと」</strong>の<strong>右側</strong>に、次の 2 つがあります。
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>時計形のボタン</strong> … それぞれのやることに出る
            <strong>最終完了の日付・時刻</strong>を、見せたり隠したりします。
          </li>
          <li>
            <strong>矢印が二重になった形のボタン</strong> …{' '}
            <strong>並べ替え</strong>用の「上へ／下へ」を、各行に出すかどうかを切り替えます。
          </li>
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            名前の右の <strong>えんぴつ</strong>と<strong>ゴミ箱</strong>
            を押すと、それぞれ名前の変更・消去です。
          </li>
          <li>
            並べ替えをオンにすると、各行の<strong>左側</strong>に{' '}
            <strong>順番を上へ／下へ</strong>
            のボタンが並びます（<strong>いまのやること</strong>とは入れ替わりません）。
          </li>
          <li>
            時計と並べ替えのオン・オフは、<strong>グループごと</strong>に覚えられます。
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          まだやることがないとき
        </h3>
        <p>
          真ん中に案内が出ます。名前を入れて <strong>「タスク追加」</strong>{' '}
          を押すと、最初のやることができます。
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          やることを足す（すでに 1 件以上あるとき）
        </h3>
        <p>
          画面下の横並びの欄に名前を入れて <strong>「タスク追加」</strong>
          を押すと、そのグループの<strong>いちばん後ろ</strong>に足せます。
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
          プライバシー・データの取り扱い（注意）
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            やることやグループの内容は、
            <strong>
              サーバーに送ったり、インターネット上に自動バックアップしたりはしません
            </strong>
            （この端末のブラウザの中に保存されます）。
          </li>
          <li>
            <strong>別のスマホ・別のパソコンとは勝手に同期しません。</strong>
            機種変更やほかの端末では、同じ内容は出ません。
          </li>
          <li>
            <strong>
              ブラウザの閲覧データ削除・端末の初期化・サイトのデータ消去
            </strong>
            で、入力内容が消えることがあります。大切な内容は別の場所にも控えをとってください。
          </li>
          <li>
            <strong>端末を他人に貸したり、盗難・紛失したり</strong>
            すると、内容を見られたり失ったりする可能性があります。
          </li>
          <li>
            <strong>
              パスワード・口座番号・マイナンバーなど、本当に秘密にしたい情報は、タスクに書かないでください。
            </strong>
            このアプリはそうした用途向けの強い保護はしていません。
          </li>
          <li>
            技術的には、
            <strong>同じサイト（同じドメイン）の別のページ</strong>
            と、ブラウザの保存領域の扱いが近い部分があります。普段の使い方で問題になることは少ないですが、心配な場合は信頼できる環境で使ってください。
          </li>
          <li>
            <strong>公開のパソコンや、不特定多数が触れる端末</strong>
            では使わないか、使う場合は終了後にブラウザのサイトデータ削除などを検討してください。
          </li>
          <li>
            <strong>
              本アプリの公開ページは HTTPS（鍵マーク）で提供しています。
            </strong>
            アドレスバーが <code className="bg-stone-100 px-1 rounded">https://</code>{' '}
            になっていることを確認してから使ってください。
          </li>
          <li>
            <strong>
              ログインや個人情報の収集のための仕組みは、このアプリには入れていません。
            </strong>
            それでも、端末の中に残るデータは、端末やブラウザの扱いに依存します。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          困ったとき
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            この説明をアプリで読みたい → グループ一覧の一番下、{' '}
            <strong>「使い方」</strong> を押してください。タスク画面にいるときは、まず{' '}
            <strong>←</strong> で一覧に戻ってから開けます。
          </li>
          <li>
            英語にしたい・日本語に戻したい → グループ一覧かタスク画面の{' '}
            <strong>「日本語」／「English」</strong> を押してみてください。
          </li>
          <li>
            最終完了の日付や、順番を変えるボタンが見えない …
            <strong>やることが 1 件だけ</strong>のときは
            <strong>ヘッダー</strong>の時計形のボタンがオフになっていないか見てください（「このあと」はありません）。
            <strong>2 件以上</strong>のときは <strong>「このあと」</strong> の見出しの
            <strong>右</strong>にある、時計と矢印のボタンがオフになっていないか見てください。順番を変える「上／下」は、オンにすると各行の
            <strong>左</strong>に出ます。
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
      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-2 mb-2 border-b border-stone-200 pb-1">
          What “Junguri” means
        </h2>
        <p>
          <strong>Junguri</strong> (written <strong>順繰り</strong> in Japanese)
          refers to moving forward in a <strong>fixed order</strong>, one step at
          a time, with items <strong>taking turns</strong> (not one single task
          repeating forever). Picture{' '}
          <strong>A → B → C → A → B → C → …</strong>—the sequence keeps cycling.
        </p>
      </section>

      <p>
        In this guide, each item you do is called a <strong>“to-do”</strong>,
        and each named container is called a <strong>“group”</strong>. (The app
        labels each item as a <strong>“task”</strong>—same idea as a to-do here.)
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
            Tap a name to open that group’s <strong>task screen</strong>.
          </li>
          <li>
            <strong>Task screen</strong>
            <br />
            The <strong>top</strong> item is what you focus on now. When there are{' '}
            <strong>two or more</strong> to-dos, <strong>“Up next”</strong> lists
            what comes after.
          </li>
          <li>
            <strong>(Optional) Read this guide in the app</strong>
            <br />
            On the group list, tap <strong>“How to use”</strong> at the{' '}
            <strong>bottom</strong> to open this help full screen. Tap{' '}
            <strong>“Close”</strong> to return to the list.
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
            Type a name and tap <strong>“Create group”</strong>. If you leave the
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
            Next to the <strong>“Junguri Task”</strong> title, use{' '}
            <strong>“日本語” / “English”</strong>. Your choice is remembered the
            next time you open the app.
          </li>
          <li>
            <strong>How to use (full screen)</strong>
            <br />
            At the <strong>bottom right</strong>, tap the underlined{' '}
            <strong>“How to use”</strong> to open this guide. Tap{' '}
            <strong>“Close”</strong> to return to the list.
          </li>
          <li>
            <strong>Delete everything</strong>
            <br />
            At the <strong>bottom left</strong>, <strong>“Delete all data”</strong>{' '}
            removes all groups and to-dos at once (
            <strong>this cannot be undone</strong>—use only when you are sure).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          On the task screen
        </h2>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          Top bar (header)
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>←</strong> … Returns to the group list.
          </li>
          <li>
            <strong>Group name</strong> … Tap to edit the name (field,
            Save / Cancel).
          </li>
          <li>
            <strong>Pencil</strong> … Starts editing the group name (another way
            to do the same as tapping the name).
          </li>
          <li>
            <strong>“日本語” / “English”</strong> … Switches language (same as
            on the first screen; remembered next time).
          </li>
        </ul>
        <p>
          When there is only <strong>one</strong> to-do, there is no “Up next”
          section. Show or hide <strong>last completed</strong> date and time
          with the <strong>clock-shaped button</strong> in the header.
        </p>

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
                <td className="p-2">
                  <strong>Trash</strong>
                </td>
                <td className="p-2">
                  Delete. Sometimes the app asks “Are you sure?” first.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          On the <strong>large top card</strong> and in the{' '}
          <strong>“Up next”</strong> list, the pencil and trash sit to the right
          of each name (no “Edit”/“Delete” text labels).
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          Current to-do (large card on top)
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Complete</strong> … Marks progress for now and sends the item
            to the <strong>back of the line</strong> (it will come around again
            later).
          </li>
          <li>
            <strong>Skip</strong> … Only when there are{' '}
            <strong>two or more</strong> to-dos. Sends the current one backward
            without a completion record so another item can be on top.
          </li>
          <li>
            Tap the <strong>to-do name</strong> … Opens name editing.
          </li>
          <li>
            <strong>Pencil</strong> to the right of the name … Starts renaming
            (same goal as tapping the name).
          </li>
          <li>
            <strong>Trash</strong> to the right of the name … Deletes this
            to-do (with a confirmation step).
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          “Up next” items (when there are two or more to-dos)
        </h3>
        <p>
          To the <strong>right</strong> of the <strong>“Up next”</strong> heading
          you will find:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Clock-shaped button</strong> … Shows or hides{' '}
            <strong>last completed</strong> date and time on each row.
          </li>
          <li>
            <strong>Double-arrow button</strong> … Turns the per-row{' '}
            <strong>up / down</strong> reorder controls on or off.
          </li>
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Pencil and trash on the right of the name: rename or delete that row.
          </li>
          <li>
            When reorder is on, <strong>up / down</strong> buttons appear on the{' '}
            <strong>left</strong> of each row (they do not swap with the current
            top to-do).
          </li>
          <li>
            Clock and reorder toggles are saved <strong>per group</strong>.
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          When there are no to-dos yet
        </h3>
        <p>
          A message appears in the center. Type a name and tap{' '}
          <strong>“Add task”</strong> to create your first to-do.
        </p>

        <h3 className="text-sm font-semibold text-stone-800 mt-4 mb-2">
          Add a to-do (when you already have at least one)
        </h3>
        <p>
          Use the horizontal row at the bottom: type a name and tap{' '}
          <strong>“Add task”</strong> to add it at the <strong>end</strong> of
          the group.
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          How to think about it
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>“Complete”</strong> … For when you want to say “that’s enough
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
          Privacy and data (please read)
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Your tasks and group names are <strong>not uploaded to a server</strong>{' '}
            and <strong>not auto-backed up online</strong>. They stay in this
            device&apos;s browser storage.
          </li>
          <li>
            They do <strong>not</strong> sync to other phones or PCs by
            themselves.
          </li>
          <li>
            Clearing browser data, resetting the device, or deleting site data
            can <strong>erase your entries</strong>. Keep copies elsewhere if
            something matters.
          </li>
          <li>
            If someone else uses the device or it is{' '}
            <strong>lost or stolen</strong>, your entries may be seen or lost.
          </li>
          <li>
            Do <strong>not</strong> store passwords, bank details, or other highly
            sensitive secrets in tasks—this app is not built for a vault-level
            threat model.
          </li>
          <li>
            On the web, storage rules can be shared across pages on the{' '}
            <strong>same site (same domain)</strong>. That rarely causes issues in
            normal use; use a device and browser you trust if you are concerned.
          </li>
          <li>
            Avoid the app on <strong>shared or public computers</strong>, or clear
            site data when you are done.
          </li>
          <li>
            The public app is served over <strong>HTTPS</strong>. Check that the
            address bar shows <code className="bg-stone-100 px-1 rounded">https://</code>{' '}
            before you use it.
          </li>
          <li>
            There is <strong>no login</strong> and <strong>no tracker</strong>{' '}
            for collecting personal information in this app. What stays on the
            device still depends on how you handle the device and browser.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-stone-800 mt-6 mb-2 border-b border-stone-200 pb-1">
          If something seems wrong
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            To read this guide in the app: on the group list, tap{' '}
            <strong>“How to use”</strong> at the bottom. If you are on the task
            screen, tap <strong>←</strong> first to go back to the list.
          </li>
          <li>
            To switch language: try <strong>“日本語” / “English”</strong> on the
            group list or the task screen.
          </li>
          <li>
            If last-completed times or reorder buttons are missing: with only{' '}
            <strong>one</strong> to-do, check the <strong>clock</strong> in the
            header (there is no “Up next”). With <strong>two or more</strong>,
            check the clock and arrow buttons to the <strong>right</strong> of
            the <strong>“Up next”</strong> heading. When reorder is on, up/down
            controls appear on the <strong>left</strong> of each row.
          </li>
        </ul>
      </section>

      <p className="mt-6 pt-4 border-t border-stone-200 text-stone-600">
        <strong>New to the app?</strong> Try making{' '}
        <strong>
          one group, two or three to-dos, then tap “Complete” and “Skip” once each
        </strong>
        —that usually makes the flow easy to feel.
      </p>
    </div>
  )
}

export default function HelpGuide({ onClose }) {
  const { locale, t } = useLocale()

  return (
    <div className="flex flex-1 flex-col min-h-0">
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
      <main className="min-h-0 flex-1 overflow-auto px-4 pt-4">
        {locale === 'ja' ? <GuideJa /> : <GuideEn />}
      </main>
    </div>
  )
}
