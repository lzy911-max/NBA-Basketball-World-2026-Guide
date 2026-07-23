// NBA Basketball World 2026 - All Guide Data
const GUIDES = [
  {
    "id": "lineup-preset",
    "category": "球队管理",
    "tags": [
      "阵容",
      "预设",
      "战术"
    ],
    "content": {
      "zh": {
        "title": "陣容預設說明",
        "body": "<ol><li>陣容預設根據球隊等級解鎖，可設置多個陣容</li><li>已解鎖的預設陣容，可添加球員和設置戰術</li><li>調整好的預設陣容，需要進行儲存，才可生效</li><li>同一個預設陣容不可添加同名的球員</li><li>助陣中的同名球員不可添加至預設陣容中</li><li>預設陣容中的球員，被解僱、上架寄售、晉升消耗、特訓消耗、放入助陣，都將從預設陣容中自動移除</li><li>同一名球員，可在多個預設陣容中同時出現</li><li>預設好的陣容進行啟用，則替換玩家目前陣容中的球員（首發和替補）</li><li>預設陣容啟用成功，球員繼承培養：球員等級、球員強化、球員裝備、球員徽章、球員特技，球員星級、晉升、特訓無法繼承</li></ol>"
      },
      "en": {
        "title": "Lineup Preset Guide",
        "body": "<ol><li>Lineup presets are unlocked based on team level, allowing you to set up multiple lineups.</li><li>For each unlocked preset, you can add players and assign tactics.</li><li>Adjusted presets must be saved before they take effect.</li><li>The same preset cannot contain duplicate players.</li><li>Players already in assist slots cannot be added to a preset lineup.</li><li>If a player in a preset lineup is dismissed, listed for sale, used for promotion, used for training, or placed in an assist slot, they will be automatically removed from that preset.</li><li>The same player can appear in multiple presets.</li><li>Activating a preset lineup will replace the current lineup (both starters and bench).</li><li>When a preset lineup is activated, the following development progress carries over: Player Level, Player Enhancement, Player Gears, Player Badges, and Player Special Skills. Player Stars, Promotion Level, and Training Level are not carried over.</li></ol>"
      },
      "ja": {
        "title": "プリセット説明",
        "body": "<ol><li>プリセット枠はチームレベルに応じて解放され、複数のチーム編成を保存できます。</li><li>プリセットには、選手の編成や戦術の設定が可能です。</li><li>編集したプリセットは、保存することで有効になります。</li><li>同じプリセット内に同名選手を複数追加することはできません。</li><li>サポート中の同名選手をプリセットに追加することはできません。</li><li>プリセット内の選手を解雇、出品、サポートに設定、または進化素材や特訓素材に使用された場合、プリセットから自動的に外されます。</li><li>同名選手を複数のプリセットに編成することが可能です。</li><li>プリセットを適用すると、現在のチーム編成（スターターおよびベンチウォーマー）が上書きされます。</li><li>プリセット適用後、選手のレベル、強化レベル、装備、バッジ、特技などの育成進捗は引き継がれますが、星数、進化、特訓の進捗は引き継がれません。</li></ol>"
      },
      "ko": {
        "title": "라인업 프리셋 설명",
        "body": "<ol><li>라인업 프리셋은 팀 레벨에 따라 해제되며, 여러 개의 라인업을 설정할 수 있습니다.</li><li>해제된 프리셋 라인업에는 선수를 추가하고 전술을 설정할 수 있습니다.</li><li>조정이 완료된 프리셋 라인업은 저장하여야만 적용됩니다.</li><li>동일한 프리셋 라인업에는 동명이인 선수를 추가할 수 없습니다.</li><li>서포트에 있는 동명이인 선수는 프리셋 라인업에 추가할 수 없습니다.</li><li>프리셋 라인업의 선수가 해고되거나, 위탁 판매 등록, 승급 소모, 특훈 소모, 서포트 배치될 경우 프리셋 라인업에서 자동으로 제거됩니다.</li><li>동일한 선수는 여러 프리셋 라인업에 동시에 존재할 수 있습니다.</li><li>프리셋된 라인업을 활성화하면 플레이어님의 현재 라인업 선수(선발 및 후보)가 교체됩니다.</li><li>프리셋 라인업을 활성화하면 선수의 육성 상태가 계승됩니다. 선수 레벨, 선수 강화, 선수 장비, 선수 배지, 선수 고유 스킬은 계승되지만 선수 성급, 승급, 특훈은 계승되지 않습니다.</li></ol>"
      }
    }
  },
  {
    "id": "player-rating-drop",
    "category": "球员养成",
    "tags": [
      "球员分数",
      "能力值",
      "掉分",
      "数据更新"
    ],
    "content": {
      "zh": {
        "title": "球員分數下跌說明",
        "body": "<h3>為什麼球員分數會下跌</h3><p>——《NBA Basketball World 2026》是基於每日數據實時更新的。遊戲每日15:00會依照真實NBA比賽戰績，自動更新現役球員的能力值與戰力分數。系統會以球員近期多場歷史數據作為基礎權重，再搭配當日賽況，讓分數自動上下波動。</p><h3>同一名球員為何有紅色、黃色變化？</h3><p>顏色代表球員當前能力值漲跌狀態，隨每日數據更新自動變動。可在球員介面點擊「數據表」，查看球員近期完整的能力值、戰力波動紀錄。</p><h3>掉分保護機制說明</h3><p>存在單場掉分保護機制，單場比賽最多只會掉3分。若球員單場表現太差，原本應掉分超過3分，超出的部分不會一次性扣完，會累積到往後賽事慢慢扣除。也因此會出現：球員明明後續表現不錯，能力值卻還是持續下跌的狀況。</p>"
      },
      "en": {
        "title": "Player Ratings Drop Guide",
        "body": "<h3>Why Do Player Ratings Decrease?</h3><p><strong>Real-Time Daily Updates Based on Live Stats:</strong> In NBA Basketball World 2026, the system automatically updates the attributes and Power ratings of active players every day at 15:00 (UTC+8) based on real-world NBA game results.</p><p><strong>Dynamic Rating Fluctuation:</strong> The algorithm weights a player's recent multi-game historical data as a baseline and factors in their latest live-game performance to dynamically calculate daily rating fluctuations.</p><h3>What Do the Red and Yellow Indicators Mean?</h3><p><strong>Visual Status Shifts:</strong> The color shifts represent a player's current attribute trend, changing automatically with the daily stat updates.</p><p><strong>Tracking Trends:</strong> You can tap the \"Leaderboard\" tab on any Player Profile interface to view a detailed, comprehensive history of their recent Rating and Power fluctuations.</p><h3>How Does the Rating Drop Protection Mechanism Work?</h3><p><strong>Single-Game Soft Cap:</strong> To mitigate extreme performance volatility, the game features a single-game drop protection mechanism - a player's rating can drop by a maximum of 3 points per single game.</p><p><strong>The \"Carryover\" Effect:</strong> If a player has an exceptionally poor game where the calculated deduction exceeds 3 points, the remaining deficit is not deducted all at once. Instead, it is banked and gradually rolled over into subsequent games.</p><p><strong>Why Ratings Stay Down:</strong> This carryover mechanism explains why a player's rating might continue to trend downward for a short period, even if they bounce back with a solid performance in their very next game.</p>"
      },
      "ja": {
        "title": "選手スコアが下がる理由",
        "body": "<h3>なぜ選手スコアが下がるのか</h3><p>——《NBA Basketball World 2026》は毎日のデータをリアルタイムで更新するゲームです。毎日15:00(UTC+8)に実際のNBA試合結果に基づいて、現役選手の能力値と戦力スコアが自動更新されます。システムは選手の直近複数試合の履歴データを基準にして、当日の試合状況を加味し、スコアが自動的に上下します。</p><h3>なぜ同じ選手に赤色と黄色の変化があるのか？</h3><p>色は選手の現在の能力値の上昇・下降状態を示し、毎日のデータ更新に合わせて自動で変わります。選手画面の「データ表」をタップすると、選手の直近の全能力値・戦力の変動記録を確認できます。</p><h3>スコア降下保護の仕組み</h3><p>1試合あたりの降下保護があり、1試合で最大3点しか下がりません。選手の1試合のパフォーマンスが非常に悪く、本来3点以上下がる場合でも超過分は一度に差し引かれず、以降の試合で少しずつ差し引かれます。そのため、選手のその後のパフォーマンスが良好でも能力値が下がり続けるケースがあります。</p>"
      },
      "ko": {
        "title": "선수 점수가 떨어지는 이유",
        "body": "<h3>왜 선수 점수가 하락하는가</h3><p>——《NBA Basketball World 2026》은 매일 데이터를 실시간으로 업데이트하는 게임입니다. 매일 15:00(UTC+8)에 실제 NBA 경기 결과를 바탕으로 현역 선수의 능력치와 전력 점수가 자동 업데이트됩니다. 시스템은 선수의 최근 여러 경기 기록 데이터를 기본 가중치로 삼고 당일 경기 상황을 반영해 점수를 자동으로 오르내립니다.</p><h3>왜 같은 선수에게 빨간색과 노란색 변화가 나타나는가?</h3><p>색상은 선수의 현재 능력치 상승·하락 상태를 나타내며, 매일 데이터 업데이트에 따라 자동으로 변합니다. 선수 화면에서 「데이터 표」를 탭하면 선수의 최근 전체 능력치 및 전력 변동 기록을 확인할 수 있습니다.</p><h3>점수 하락 보호 메커니즘 설명</h3><p>단일 경기 하락 보호 메커니즘이 있어, 한 경기에서 최대 3점밖에 떨어지지 않습니다. 선수가 한 경기에서 매우 부진하여 3점 이상 떨어져야 하는 경우에도 초과분은 한 번에 차감되지 않고 이후 경기에서 점진적으로 차감됩니다. 따라서 선수의 이후 활약이 좋더라도 능력치가 계속 하락하는 상황이 생길 수 있습니다.</p>"
      }
    }
  },
  {
    "id": "rating-drop-benefits",
    "category": "球员养成",
    "tags": [
      "球员分数",
      "特训",
      "肉卡",
      "养成技巧"
    ],
    "content": {
      "zh": {
        "title": "我的球員分數掉了會發生什麼？",
        "body": "<h3>1. 後期養成上限更高</h3><p>趁球員低分階段完成滿特訓，待後續現實表現回溫、能力值回漲，整體戰力可以衝到更高上限。</p><h3>2. 低成本製作高階肉卡</h3><p>利用掉分低谷期養成，是遊戲主流「做肉卡」玩法，能輕鬆量產100能力以上的高階材料卡，CP值極高。</p><h3>3. 更容易抽到同名球員</h3><p>部分SS球員品質跌落至S級後，可從一般S球員包中抽出。也可以囤好各類球員包，就能定向蹲取可能存在數值波動的熱門球員。</p><h3>總結</h3><p>球員分數下跌不用慌，短期戰力雖略受影響，反而能低門檻特訓、節省高階材料、衝更高養成上限，是囤卡、養成、做肉卡的最佳時機！</p>"
      },
      "en": {
        "title": "The Hidden Benefits of a Rating Drop",
        "body": "<h3>1. Drastically Lower Training Costs</h3><p><strong>Save Your High-Tier Mats:</strong> Training and breakthrough costs are tied directly to a card's current rating. When a superstar's rating dips, the required upgrade materials decrease in rarity and cost.</p><h3>2. Higher Long-Term Stat Ceiling</h3><p><strong>Unlocking Maximum Potential:</strong> If you max-train a player while their ratings are temporarily low, those stat boosts remain locked in. Once they heat up in the real NBA, their overall Power will rocket to a much higher ceiling.</p><h3>3. High-Tier Fodder Crafting at Low Cost</h3><p><strong>Efficient Fodder Farming:</strong> Taking advantage of a player's performance slump is the meta strategy for \"fodder crafting\". You can easily mass-produce premium 100+ Rating fodder cards.</p><h3>4. Easier to Pull Duplicate Cards</h3><p><strong>De-ranking Perks:</strong> When certain base SS-tier players temporarily drop into the S-tier rating bracket, they become pullable from standard S-tier Player Packs.</p><h3>Summary</h3><p>Don't panic when your player ratings drop! It is the absolute best time for hoarding, upgrading, and crafting fodder. Take advantage of the lower training thresholds and push your squad to an even higher ceiling!</p>"
      },
      "ja": {
        "title": "選手スコアが下がったらどうなる？",
        "body": "<h3>1. 後期育成上限がより高くなる</h3><p>選手の低スコア期に特訓を満タンにしておき、現実のパフォーマンスが回復して能力値が上昇したとき、総合戦力をより高い上限まで伸ばせます。</p><h3>2. 低コストで高クラスの肉カードを作成</h3><p>スコア下落期を活用した育成は、ゲームの主流である「肉カード作り」の手法です。能力値100以上の高クラス素材カードを手軽に量産でき、コストパフォーマンスが非常に高いです。</p><h3>3. 同名選手を入手しやすくなる</h3><p>一部のSS選手の品質がSクラスに下落すると、通常のS選手パックから入手できます。各種選手パックをストックしておけば、能力値変動が起きやすいホット選手を狙い撃ちできます。</p><h3>まとめ</h3><p>選手スコアが下がっても焦らないでください。カードのストック・育成・肉カード作りの絶好のタイミングです！</p>"
      },
      "ko": {
        "title": "내 선수 점수가 떨어지면 어떻게 될까?",
        "body": "<h3>1. 후반 육성 한계치가 더 높아짐</h3><p>선수의 저점 구간에 특훈을 가득 채워두면, 이후 실제 활약이 회복되고 능력치가 상승했을 때 전체 전력을 더 높은 한계치까지 끌어올릴 수 있습니다.</p><h3>2. 저비용으로 고급 육성 카드 제작</h3><p>점수 하락 저점 기간을 활용한 육성은 게임의 주류 방식인 「육성 카드 만들기」입니다. 능력치 100 이상의 고급 소재 카드를 쉽게 대량 생산할 수 있습니다.</p><h3>3. 동명 선수를 뽑기 쉬워짐</h3><p>일부 SS 선수의 품질이 S급으로 하락하면 일반 S 선수 팩에서 획득할 수 있습니다.</p><h3>총정리</h3><p>선수 점수 하락에 당황하지 마세요. 카드 비축·육성·육성 카드 만들기의 최적 타이밍입니다!</p>"
      }
    }
  },
  {
    "id": "classic-highlights",
    "category": "主要玩法",
    "tags": [
      "经典回顾",
      "关卡",
      "行动力",
      "奖励"
    ],
    "content": {
      "zh": {
        "title": "經典回顧",
        "body": "<h3>基礎規則</h3><p>挑戰需消耗行動力，可持續向上發起挑戰，無次數上限限制。</p><h3>關卡與章節規則</h3><p>每個主題章節包含多個關卡，需按順序逐一挑戰，不可跳過；需通關當前主題章節的所有關卡，方可自動解鎖下一個主題章節。</p><h3>獎勵規則</h3><p>挑戰關卡成功，即可直接獲得對應通關獎勵；支援重複挑戰已通關的層數，重複挑戰可再次獲得獎勵；每個章節通關至指定層數，可領取章節獎勵。</p><h3>建議</h3><p>當您無法通過下一個關卡時，您可以嘗試一鍵重複挑戰當前關卡。</p>"
      },
      "en": {
        "title": "Classic Highlights Rules",
        "body": "<p>Challenges require Mobility Points to attempt. You may continuously challenge higher levels with no limit on attempts.</p><h3>Stage & Chapter Rules</h3><p>Each themed chapter contains multiple stages that must be challenged in order - no skipping allowed. All stages within the current themed chapter must be cleared before the next themed chapter is automatically unlocked.</p><h3>Reward Rules</h3><p>Successfully clearing a stage will immediately grant the corresponding clear reward. Previously cleared stages can be re-challenged, and rewards can be earned again upon repeat clears. Clearing a chapter up to a designated level allows you to claim the Chapter Reward.</p><h3>Tip</h3><p>If you're unable to clear the next stage, try using the one-tap repeat challenge feature on your current stage.</p>"
      },
      "ja": {
        "title": "栄光の軌跡",
        "body": "<h3>基本ルール</h3><p>チャレンジにはアクションポイントを消費します。上位ステージへ連続して挑戦でき、挑戦回数の上限はありません。</p><h3>ステージとチャプタールール</h3><p>各テーマチャプターには複数のステージがあり、順番に一つずつ挑戦する必要があります。スキップ不可；現在のテーマチャプターのすべてのステージをクリアすることで、次のテーマチャプターが自動的に解放されます。</p><h3>報酬ルール</h3><p>ステージ攻略に成功すると、対応するクリア報酬をすぐに獲得できます；クリア済みのステージへの繰り返しチャレンジに対応しており、再チャレンジでも報酬を再取得できます；各チャプターを指定ステージまでクリアすると、チャプター報酬を受け取れます。</p><h3>ヒント</h3><p>次のステージをクリアできない場合は、現在のステージのワンタップ繰り返しチャレンジをお試しください。</p>"
      },
      "ko": {
        "title": "클래식 리뷰",
        "body": "<h3>기본 규칙</h3><p>챌린지에는 이동력을 소모합니다. 계속해서 상위 스테이지에 도전할 수 있으며 횟수 제한이 없습니다.</p><h3>스테이지 및 챕터 규칙</h3><p>각 테마 챕터에는 여러 스테이지가 있으며, 순서대로 하나씩 도전해야 합니다. 건너뛸 수 없습니다. 현재 테마 챕터의 모든 스테이지를 클리어해야 다음 테마 챕터가 자동으로 해금됩니다.</p><h3>보상 규칙</h3><p>스테이지 도전에 성공하면 바로 해당 클리어 보상을 획득할 수 있습니다；이미 클리어한 스테이지 재도전을 지원하며, 재도전 시에도 보상을 다시 받을 수 있습니다；각 챕터를 지정 스테이지까지 클리어하면 챕터 보상을 수령할 수 있습니다.</p><h3>팁</h3><p>다음 스테이지를 통과하지 못할 경우, 현재 스테이지의 원터치 반복 도전을 시도해 보세요.</p>"
      }
    }
  },
  {
    "id": "peak-tour",
    "category": "主要玩法",
    "tags": [
      "巅峰巡演",
      "训练收益",
      "商业巡演",
      "快速训练",
      "钻石"
    ],
    "content": {
      "zh": {
        "title": "巔峰巡演",
        "body": "<p>巔峰巡演挑戰無資源消耗，每日上限500次，0點重置且未用次數不保留，滿足關卡結算條件即可通關領取鑽石獎勵，通關指定層數可領取更豐厚的鑽石目標獎勵。</p><h3>訓練收益</h3><p>關卡層數越高收益越多，可儲存12小時，VIP可延長儲存時長；（通關第1層解鎖）</p><h3>商業巡演</h3><p>每日0點刷新任務，派遣球員完成可領取鑽石，滿足加成條件可獲額外鑽石，未完成任務次日重置；（通關第10層解鎖）</p><h3>快速訓練</h3><p>每日3次（VIP可增加次數），可立即獲得120分鐘收益；（通關第15層解鎖）</p><h3>建議</h3><p>免費的訓練獎勵和快速訓練千萬不要錯過，多挑戰衝到更高層數領取更多掛機獎勵。</p>"
      },
      "en": {
        "title": "Peak Tour",
        "body": "<p>Peak Tour challenges require no resource consumption. The daily limit is 500 attempts, which resets at midnight - unused attempts do not carry over. Meet the stage clear conditions to complete a level and earn Diamond rewards. Clearing designated levels allows you to claim even richer Diamond milestone rewards.</p><h3>Training Earnings</h3><p>The higher the stage level, the greater the earnings. Earnings can be stored for up to 12 hours; VIP members can extend the storage duration. (Unlocked upon clearing Stage 1)</p><h3>Commercial Tour</h3><p>Tasks refresh daily at midnight. Deploy players to complete tasks and earn Diamonds. Meeting bonus conditions grants additional Diamonds. Incomplete tasks reset the following day. (Unlocked upon clearing Stage 10)</p><h3>Quick Training</h3><p>Available 3 times per day (VIP members may receive additional uses). Instantly grants 120 minutes worth of earnings. (Unlocked upon clearing Stage 15)</p><h3>Tip</h3><p>Don't miss out on the free Training Rewards and Quick Training! Keep pushing for higher stage levels to maximize your idle earnings.</p>"
      },
      "ja": {
        "title": "ピークツアー",
        "body": "<p>ピークツアーのチャレンジはリソースを消費しません。1日の上限は500回、0時にリセットされ未使用分は繰り越されません。ステージのクリア条件を満たせばクリアとなり、ダイヤ報酬を獲得できます。</p><h3>トレーニング収益</h3><p>ステージが高いほど収益が多く、12時間分を蓄積できます。VIPは蓄積時間を延長できます；（第1ステージクリアで解放）</p><h3>ビジネスツアー</h3><p>毎日0時にミッションがリフレッシュ。選手を派遣して完了するとダイヤを獲得でき、ボーナス条件を満たすと追加ダイヤが得られます。（第10ステージクリアで解放）</p><h3>クイックトレーニング</h3><p>1日3回（VIPは回数を増やせます）、すぐに120分の収益を取得できます；（第15ステージクリアで解放）</p><h3>ヒント</h3><p>無料のトレーニング報酬とクイックトレーニングは絶対に逃さないでください。</p>"
      },
      "ko": {
        "title": "피크 투어",
        "body": "<p>피크 투어 챌린지는 리소스를 소모하지 않습니다. 하루 상한은 500회이며, 0시에 리셋되고 미사용 횟수는 이월되지 않습니다. 스테이지 클리어 조건을 충족하면 다이아 보상을 획득할 수 있습니다.</p><h3>트레이닝 수익</h3><p>스테이지가 높을수록 수익이 많으며, 12시간 분을 축적할 수 있습니다. VIP는 축적 시간을 연장할 수 있습니다；（1스테이지 클리어 시 해금）</p><h3>비즈니스 투어</h3><p>매일 0시에 임무가 새로고침됩니다. 선수를 파견하여 완료하면 다이아를 획득할 수 있고, 보너스 조건을 충족하면 추가 다이아를 얻습니다.（10스테이지 클리어 시 해금）</p><h3>빠른 트레이닝</h3><p>하루 3회（VIP는 횟수를 늘릴 수 있습니다）, 즉시 120분 수익을 취득할 수 있습니다；（15스테이지 클리어 시 해금）</p><h3>팁</h3><p>무료 트레이닝 보상과 빠른 트레이닝을 절대 놓치지 마세요.</p>"
      }
    }
  },
  {
    "id": "duel-of-superteams",
    "category": "主要玩法",
    "tags": [
      "豪门争锋",
      "挑战券",
      "排名",
      "伤害"
    ],
    "content": {
      "zh": {
        "title": "豪門爭鋒",
        "body": "<h3>挑戰規則</h3><p>每日5:00~20:00開啟，每3小時刷新1支豪門球隊；挑戰需消耗挑戰券，每日贈送5次免費挑戰次數（隔日重置），優先消耗免費次數。上個整點球隊未擊敗，下個整點會被清除並刷新新球隊；限定時間內擊敗，次日該時段球隊升1級，未擊敗則降1級。</p><h3>獎勵規則</h3><p>對豪門球隊傷害值>100，可上榜拿排名獎勵；每次挑戰獲勝可獲挑戰獎勵；挑戰層數越高，獎勵越豐厚。</p><h3>建議</h3><p>參與獲得的積分可以兌換不少優質獎勵，不要每日忘記來參加。獎勵發放時間：本輪排名獎勵將於下一輪次開始後10分鐘發放。</p>"
      },
      "en": {
        "title": "Duel of Superteams",
        "body": "<h3>Challenge Rules</h3><p>Event opens daily from 5:00 to 20:00 (UTC+8), with one superteam refreshed every 3 hours. Challenges consume Superteam Challenge Tickets. 5 free challenge attempts are granted daily (reset next day), which are consumed first. If the current hourly superteam is not defeated before the next hour, it will be cleared and replaced with a new one. Defeat the team within the time limit, and the team level of this timeslot will increase by 1 the next day; if undefeated, its level will decrease by 1.</p><h3>Reward Rules</h3><p>Deal over 100 superteam's morale damage to rank on the leaderboard and claim ranking rewards. Victorious challenges grant challenge rewards; higher challenge tiers offer richer rewards.</p><h3>Tips</h3><p>Points earned from participation can be exchanged for plenty of good rewards. Do not miss your daily participation.</p>"
      },
      "ja": {
        "title": "強豪挑戦",
        "body": "<h3>チャレンジルール</h3><p>毎日5:00～20:00（UTC+8）に開放。3時間ごとに1チームの強豪チームがリフレッシュされます。チャレンジにはチャレンジチケットを消費し、毎日5回の無料チャレンジが付与されます（翌日リセット）。制限時間内に撃破した場合、翌日その時間帯のチームが1レベル上昇し、撃破できなかった場合は1レベル降下します。</p><h3>報酬ルール</h3><p>強豪チームへのダメージ値が100を超えるとランキングに乗り、ランキング報酬を獲得できます。チャレンジに勝利するたびにチャレンジ報酬が得られます。</p><h3>ヒント</h3><p>参加で得られるポイントは優秀な報酬と交換できます。毎日の参加を忘れないようにしましょう。</p>"
      },
      "ko": {
        "title": "강호 대결",
        "body": "<h3>챌린지 규칙</h3><p>매일 5:00～20:00（UTC+8）에 개방됩니다. 3시간마다 강호 팀 1팀이 새로고침됩니다. 챌린지에는 챌린지 티켓을 소모하며, 매일 5회의 무료 챌린지가 제공됩니다（다음 날 리셋）. 제한 시간 내 격파 시 다음 날 해당 시간대 팀이 1레벨 상승하고, 격파하지 못하면 1레벨 하락합니다.</p><h3>보상 규칙</h3><p>강호 팀에게 가한 피해 값이 100을 초과하면 랭킹에 오를 수 있고 랭킹 보상을 받을 수 있습니다.</p><h3>팁</h3><p>참여로 얻은 포인트로 다양한 우수 보상을 교환할 수 있습니다. 매일 참여를 잊지 마세요.</p>"
      }
    }
  },
  {
    "id": "rank-match",
    "category": "主要玩法",
    "tags": [
      "排位赛",
      "赛季",
      "段位",
      "积分"
    ],
    "content": {
      "zh": {
        "title": "排位賽",
        "body": "<h3>週期/參加時間</h3><p>30天賽季制，每日9:00~21:00可參賽；採用隨機匹配，優先匹配段位、戰力相近的玩家；新賽季初始積分按上個賽季最終積分重新分配。</p><h3>段位</h3><p>一共八個段位（新秀→精英→職業→明星→巨星→大師→傳奇→名人堂），達到對應積分可提升段位，積分不足則降低段位；挑戰時，獲勝加分、失敗扣分（部分低段位不扣分）。</p><h3>獎勵發放</h3><p>每週一0時重置週任務，完成任務可領獎勵；提升段位可領取獎勵；賽季最後一天23:59時，將按當前段位透過郵件發放賽季結算獎勵。</p><h3>提示</h3><p>啟用紅色月卡可使用自動匹配排位賽的功能~</p>"
      },
      "en": {
        "title": "Rank Match",
        "body": "<h3>Cycle & Participation Time</h3><p>The season lasts 30 days. Matches are available daily from 9:00 to 21:00 (UTC+8). Random matchmaking is adopted, prioritizing opponents with similar rank and combat power. The initial rating of a new season is recalculated based on the final rating of the previous season.</p><h3>Ranks</h3><p>There are a total of 8 ranks (Rookie → Elite → Pro → Star → Superstar → Master → Legend → Hall of Fame). Reach the required rating to rank up; insufficient rating will result in demotion. Winning a match increases rating, while losing decreases rating.</p><h3>Reward Distribution</h3><p>Weekly quests reset at 00:00 every Monday. Rank-up rewards are available for reaching new tiers. On the last day of the season at 23:59, season-end settlement rewards will be sent via mail.</p><h3>Tip</h3><p>Activate the Red Monthly Pass to unlock auto-rank-match function.</p>"
      },
      "ja": {
        "title": "ランクマッチ",
        "body": "<h3>シーズン期間/参加時間</h3><p>30日間シーズン制。毎日9:00～21:00に参戦可能。ランダムマッチングを採用し、段位・戦力が近いプレイヤーを優先的にマッチングします。</p><h3>段位</h3><p>全8段位。対応するポイントに達すると段位が上昇し、ポイントが不足すると段位が降下します。勝利でポイント加算、敗北でポイント減算。</p><h3>報酬の付与</h3><p>毎週月曜0時に週間ミッションがリセットされ、ミッション達成で報酬を受け取れます；段位上昇時に報酬を受け取れます；シーズン最終日23:59にシーズン決算報酬がメールで送付されます。</p><h3>ヒント</h3><p>赤いマンスリーパスを有効にすると、ランク戦の自動マッチング機能が使えます～</p>"
      },
      "ko": {
        "title": "랭크 매치",
        "body": "<h3>시즌 기간/참가 시간</h3><p>30일 시즌제. 매일 9:00～21:00에 참전 가능. 랜덤 매칭을 채택하며, 티어·전력이 가까운 플레이어를 우선 매칭합니다.</p><h3>티어</h3><p>총 8개 티어. 해당 포인트에 도달하면 티어가 상승하고, 포인트가 부족하면 티어가 하락합니다. 승리 시 포인트 추가, 패배 시 포인트 차감.</p><h3>보상 지급</h3><p>매주 월요일 0시에 주간 임무가 리셋되며, 임무 완료 시 보상을 수령할 수 있습니다；티어 상승 시 보상을 받을 수 있습니다；시즌 마지막 날 23:59에 시즌 결산 보상이 우편으로 지급됩니다.</p><h3>팁</h3><p>빨간 월정액 카드를 활성화하면 랭크 게임 자동 매칭 기능을 사용할 수 있습니다～</p>"
      }
    }
  },
  {
    "id": "arena-match",
    "category": "主要玩法",
    "tags": [
      "竞技赛",
      "行动力",
      "能量饮料",
      "战术道具"
    ],
    "content": {
      "zh": {
        "title": "競技賽",
        "body": "<h3>參與時間</h3><p>全天每日任何時間。</p><h3>勝利獎勵</h3><p>行動力、初級能量飲料、資金；特別獎勵：累計達到一定勝場可獲得用於升級戰術的道具。</p><h3>提示</h3><p>啟用紫色月卡可使用自動匹配競技賽的功能~</p>"
      },
      "en": {
        "title": "Arena Match",
        "body": "<h3>Participation Hours</h3><p>Open all day - available at any time, every day.</p><h3>Victory Rewards</h3><p>Mobility Points, Basic Energy Drinks, and Funds. Special Reward: Accumulate a certain number of wins to earn items used for upgrading Tactics.</p><h3>Tip</h3><p>Activate the Purple Monthly Pass to unlock the Auto-Match feature for Arena Matches!</p>"
      },
      "ja": {
        "title": "エキシビションマッチ",
        "body": "<h3>参加時間</h3><p>終日いつでも。</p><h3>勝利報酬</h3><p>アクションポイント、初級エナジードリンク、資金；特別報酬：累計一定勝利数に達すると、戦術強化に使用できるアイテムを獲得できます。</p><h3>ヒント</h3><p>紫のマンスリーパスを有効にすると、エキシビションマッチの自動マッチング機能が使えます～</p>"
      },
      "ko": {
        "title": "경쟁 경기",
        "body": "<h3>참가 시간</h3><p>하루 종일 언제든지.</p><h3>승리 보상</h3><p>이동력, 초급 에너지 드링크, 자금；특별 보상：누적 일정 승리 수에 도달하면 전술 강화에 사용하는 아이템을 획득할 수 있습니다.</p><h3>팁</h3><p>보라색 월정액 카드를 활성화하면 경쟁 경기 자동 매칭 기능을 사용할 수 있습니다～</p>"
      }
    }
  },
  {
    "id": "team-match",
    "category": "主要玩法",
    "tags": [
      "组队赛",
      "多人",
      "碎片",
      "助战"
    ],
    "content": {
      "zh": {
        "title": "組隊賽",
        "body": "<h3>挑戰規則</h3><p>組隊賽分6個難度（新秀考核→職業考核→巨星考核→大師考核→傳奇考核→名人堂考核），球隊達對應等級解鎖對應難度，需通關前一難度方可挑戰已解鎖的下一難度。最多3人組隊，每次挑戰消耗1張組隊挑戰券；券不足可助戰（助戰無獎勵），隊伍需至少1名非助戰玩家才可開賽。雙人挑戰需雙方皆獲勝，三人挑戰需至少兩人獲勝，才算挑戰成功。</p><h3>獎勵規則</h3><p>首次通關對應難度可領取首通獎勵；每次獲勝必定獲得SS、S球員碎片，機率獲得稀有道具。單人挑戰獲勝獎勵會減少，挑戰難度越高，獎勵越豐厚。</p>"
      },
      "en": {
        "title": "Team Match",
        "body": "<h3>Challenge Rules</h3><p>Team Match features 6 difficulty levels. Each difficulty is unlocked when your team reaches the corresponding level requirement. You must clear the previous difficulty before challenging the next unlocked one. Up to 3 players can form a team. Each challenge attempt costs 1 Team Challenge Ticket. If you're short on tickets, you may join as a Support Player (Support Players do not receive rewards). At least 1 non-Support Player must be present for a match to begin. In a 2-player challenge, both players must win. In a 3-player challenge, at least 2 players must win.</p><h3>Reward Rules</h3><p>Clearing a difficulty for the first time grants a First Clear Reward. Every victory guarantees SS and S Player Shards, with a chance to obtain rare items. Rewards are reduced for solo challenges. The higher the difficulty, the more rewarding the victory.</p>"
      },
      "ja": {
        "title": "チーム戦",
        "body": "<h3>チャレンジルール</h3><p>チーム戦は6段階の難易度に分かれており、チームが対応するレベルに達すると解放されます。前の難易度をクリアしてから次の難易度に挑戦できます。最大3人でチームを組み、1回のチャレンジにチームチャレンジチケット1枚を消費します。チケット不足時はサポートとして参加できます（サポートに報酬なし）。</p><h3>報酬ルール</h3><p>各難易度の初回クリアで初クリア報酬を獲得できます。勝利するたびにSS・S選手のかけらが確定で入手でき、確率でレアアイテムも獲得できます。難易度が高いほど報酬は豊富になります。</p>"
      },
      "ko": {
        "title": "팀 대전",
        "body": "<h3>챌린지 규칙</h3><p>팀 대전은 6단계 난이도로 나뉘며, 팀이 해당 레벨에 도달하면 해당 난이도가 해금됩니다. 이전 난이도를 클리어해야 해금된 다음 난이도에 도전할 수 있습니다. 최대 3인 팀 구성 가능. 1회 챌린지 시 팀 챌린지 티켓 1장을 소모합니다.</p><h3>보상 규칙</h3><p>각 난이도 첫 클리어 시 첫 클리어 보상을 수령할 수 있습니다. 승리할 때마다 SS·S 선수 파편을 확정으로 획득하며, 확률적으로 희귀 아이템도 얻을 수 있습니다. 난이도가 높을수록 보상이 풍부해집니다.</p>"
      }
    }
  },
  {
    "id": "dynasty",
    "category": "主要玩法",
    "tags": [
      "王朝模式",
      "工资限额",
      "真实数据",
      "排行榜"
    ],
    "content": {
      "zh": {
        "title": "王朝模式",
        "body": "<h3>參與條件</h3><p>球隊等級30級且戰力≥5萬可開啟活動，參與需要使用王朝參賽券；每日00:00–23:50可組建次日陣容，次日23:55按房間規則發放獎勵；每日最多參與4次，0點重置次數且不保留，每月1號月榜第一可獲得專屬徽章。</p><h3>活動概述</h3><p>需在該活動100元工資限額內選擇5名次日現實有比賽的球員；若房間參與人數不足將返還參賽券，均分房至少5人開啟，排名房則需滿員。</p><h3>活動積分</h3><p>會按次日真實比賽數據計分，根據房間描述獲得王朝積分；球員次日若無比賽數據則評分為0，選擇球員需謹慎。</p><h3>排行榜規則</h3><p>前200名的玩家可上榜，優先評分>場次>戰力；周榜至少參加7場才可上榜，月榜至少參加30場才可上榜，每日0點更新對應榜單數據。</p>"
      },
      "en": {
        "title": "Dynasty Mode",
        "body": "<h3>Participation Requirements</h3><p>Unlock the event when your Team Level reaches 30 and Team Power >= 50,000. A Dynasty Entry Ticket is required. You may set up your lineup for the next day from 00:00 to 23:50 daily. Rewards will be distributed at 23:55 the next day. Limited to 4 entries per day.</p><h3>Event Overview</h3><p>Select 5 players who have real matches on the next day, within a salary cap of 100 credits. If the number of participants in a room is insufficient, all Entry Tickets will be refunded.</p><h3>Event Points</h3><p>Scores are calculated based on real match statistics from the next day. Players with no official match data on the next day will receive a score of 0.</p><h3>Leaderboard Rules</h3><p>Top 200 players will be listed. Ranking priority: Total Score > Match Count > Team Power. A minimum of 7 participations is required for the weekly leaderboard; 30 for the monthly leaderboard.</p>"
      },
      "ja": {
        "title": "王朝説明",
        "body": "<h3>参加条件</h3><p>チームレベル30かつ戦力5万以上で開放。参加には王朝参戦チケットが必要です；毎日00:00～23:50に翌日のロスターを編成でき、翌日23:55に報酬が付与されます；毎日最大4回参加可能。</p><h3>イベント概要</h3><p>翌日にリアルで試合がある選手を、100ドルの給与上限内で5名選択する必要があります。</p><h3>イベントポイント</h3><p>翌日の実際の試合データに基づいてスコアリングされ、王朝ポイントを獲得します；翌日試合データがない場合は評価0点。</p><h3>ランキングルール</h3><p>上位200名がランク入りでき、優先順位は評価>試合数>戦力。週間ランキングは最低7試合、月間ランキングは最低30試合の参加が必要。</p>"
      },
      "ko": {
        "title": "왕조 설명",
        "body": "<h3>참가 조건</h3><p>팀 레벨 30 및 전력 5만 이상에서 개방됩니다. 참가에는 왕조 참전 티켓이 필요합니다；매일 00:00～23:50에 다음 날 라인업을 편성할 수 있으며, 다음 날 23:55에 보상이 지급됩니다；매일 최대 4회 참가 가능.</p><h3>이벤트 개요</h3><p>다음 날 실제 경기가 있는 선수를 $100 연봉 상한 내에서 5명 선택해야 합니다.</p><h3>이벤트 점수</h3><p>다음 날 실제 경기 데이터를 기준으로 채점되며, 왕조 포인트를 획득합니다；다음 날 경기 데이터가 없으면 평점 0점.</p><h3>랭킹 규칙</h3><p>상위 200명이 랭킹에 오를 수 있으며, 우선 순위는 평점>경기 수>전력. 주간 랭킹은 최소 7경기, 월간 랭킹은 최소 30경기 참가해야 합니다.</p>"
      }
    }
  },
  {
    "id": "scouting",
    "category": "抽卡相关",
    "tags": [
      "球探",
      "抽卡",
      "盲盒",
      "心愿球员",
      "概率"
    ],
    "content": {
      "zh": {
        "title": "球探",
        "body": "<h3>基礎球探</h3><p>每24小時可免費探索1次，可探索C、B、A、S、SS級球員（機率：C級36.50%、B級31.74%、A級23.81%、S級5.96%、SS級1.99%），核心為精英盲盒。</p><h3>精英盲盒</h3><p>基礎球探每探索100次觸發1次，可隨機獲得S、SS級球員；最多儲存20次，需及時使用，否則達到上限後探索不再觸發，避免收益損失。</p><h3>高級球探</h3><p>可探索B、A、S、SS級球員（機率：B級33.33%、A級33.90%、S級15.25%、SS級5.00%），可設定2名心願球員，每探索60次必出1名，核心為巨星盲盒。</p><h3>巨星盲盒</h3><p>高級球探每探索40次觸發1次，可探索A、S、SS、SR級球員（機率：A級76.74%、S級13.54%、SS級8.09%、SR級1.62%）；最多儲存5次，需及時使用，達到上限後探索不再觸發。</p><h3>提示</h3><p>球探中探索到的球員，皆為未綁定狀態。</p>"
      },
      "en": {
        "title": "Scouting Guide",
        "body": "<h3>Basic Scouting</h3><p>Free exploration available once every 24 hours. Eligible players include grades C, B, A, S, and SS. (Drop Rates: C - 36.50% / B - 31.74% / A - 23.81% / S - 5.96% / SS - 1.99%) The highlight reward is the Elite Mystery Box.</p><h3>Elite Mystery Box</h3><p>Triggered once every 100 Basic Scouting explorations. Grants a random S or SS grade Player. Storage limit: 20 boxes. Use them promptly - once the cap is reached, further explorations will no longer trigger the box.</p><h3>Advanced Scout</h3><p>Eligible players include grades B, A, S, and SS. (Drop Rates: B - 33.33% / A - 33.90% / S - 15.25% / SS - 5.00%) Supports up to 2 Wishlist Players - at least one is guaranteed every 60 explorations. The highlight reward is the Superstar Mystery Box.</p><h3>Superstar Mystery Box</h3><p>Triggered once every 40 Advanced Scout explorations. Eligible players include grades A, S, SS, and SR. (Drop Rates: A - 76.74% / S - 13.54% / SS - 8.09% / SR - 1.62%) Storage limit: 5 boxes. Use them promptly.</p><h3>Tip</h3><p>All Players obtained through Scouting are in an unbound state.</p>"
      },
      "ja": {
        "title": "スカウト",
        "body": "<h3>基本スカウト</h3><p>24時間ごとに1回無料で探索可能。C・B・A・S・SSクラスの選手を探索できます（確率：Cクラス36.50%・Bクラス31.74%・Aクラス23.81%・Sクラス5.96%・SSクラス1.99%）。コアはエリートブラインドボックスです。</p><h3>エリートブラインドボックス</h3><p>基本スカウトで100回探索するごとに1回発動し、S・SSクラスの選手をランダムに入手できます。最大20回まで蓄積可能。</p><h3>上級スカウト</h3><p>B・A・S・SSクラスの選手を探索できます（確率：Bクラス33.33%・Aクラス33.90%・Sクラス15.25%・SSクラス5.00%）。2名のウィッシュリスト選手を設定可能で、60回探索するごとに1名が確定入手できます。</p><h3>スター選手ブラインドボックス</h3><p>上級スカウトで40回探索するごとに1回発動し、A・S・SS・SRクラスの選手を探索できます。最大5回まで蓄積可能。</p><h3>ヒント</h3><p>スカウトで入手した選手は全て未バインド状態です。</p>"
      },
      "ko": {
        "title": "스카우트",
        "body": "<h3>기본 스카우트</h3><p>24시간마다 1회 무료 탐색 가능. C·B·A·S·SS급 선수를 탐색할 수 있습니다（확률：C급36.50%·B급31.74%·A급23.81%·S급5.96%·SS급1.99%）. 핵심은 엘리트 블라인드 박스입니다.</p><h3>엘리트 블라인드 박스</h3><p>기본 스카우트에서 100회 탐색 시마다 1회 발동됩니다. S·SS급 선수를 무작위로 획득할 수 있습니다. 최대 20회 축적 가능.</p><h3>고급 스카우트</h3><p>B·A·S·SS급 선수를 탐색할 수 있습니다（확률：B급33.33%·A급33.90%·S급15.25%·SS급5.00%）. 2명의 위시리스트 선수를 설정할 수 있으며, 60회 탐색 시마다 1명이 확정 획득됩니다.</p><h3>스타 선수 블라인드 박스</h3><p>고급 스카우트에서 40회 탐색 시마다 1회 발동됩니다. A·S·SS·SR급 선수를 탐색할 수 있습니다. 최대 5회 축적 가능.</p><h3>팁</h3><p>스카우트로 획득한 선수는 모두 미귀속 상태입니다.</p>"
      }
    }
  },
  {
    "id": "draft",
    "category": "抽卡相关",
    "tags": [
      "选秀",
      "球会市场",
      "寄售",
      "跨服"
    ],
    "content": {
      "zh": {
        "title": "選秀攻略",
        "body": "<h3>選秀類型</h3><p>分為基礎選秀和高級選秀，兩種選秀獲得的球員卡面皆帶有球會寄售標識，可在球會市場寄售交易。</p><h3>基礎選秀</h3><p>限本服參與，房間滿6人即可開啟；可簽約C、B、A、S、SS級球員。機率：C級26.43%、B級26.43%、A級26.89%、S級15.25%、SS級5.00%。</p><h3>高級選秀</h3><p>跨服模式，房間滿6人即可開啟；每日10:00-12:00、18:00-20:00開放。可簽約A、S、SS級球員。機率：A級75.00%、S級20.00%、SS級5.00%。</p>"
      },
      "en": {
        "title": "Draft Guide",
        "body": "<h3>Draft Types</h3><p>There are two Draft modes: Basic Draft and Advanced Draft. Players acquired from both Draft types come with a Guild Resale Tag on their player cards, making them eligible for listing and trading in the Guild Market.</p><h3>Basic Draft</h3><p>Server-exclusive. Room opens once 6 players have joined. Available players: C, B, A, S, and SS grade. (Drop Rates: C - 26.43% / B - 26.43% / A - 26.89% / S - 15.25% / SS - 5.00%)</p><h3>Advanced Draft</h3><p>Cross-server mode. Room opens once 6 players have joined. Available Hours: 10:00-12:00 and 18:00-20:00 daily. Available players: A, S, and SS grade. (Drop Rates: A - 75.00% / S - 20.00% / SS - 5.00%)</p>"
      },
      "ja": {
        "title": "ドラフトの種類",
        "body": "<h3>ドラフトの種類</h3><p>基本ドラフトと上級ドラフトの2種類があります。どちらで入手した選手カードにもクラブ委託マークが付いており、クラブマーケットで委託取引できます。</p><h3>基本ドラフト</h3><p>同じサーバー内のみ参加可能。ルームが6人で満員になると開始できます。C・B・A・S・SSクラスの選手と契約できます。確率：Cクラス26.43%・Bクラス26.43%・Aクラス26.89%・Sクラス15.25%・SSクラス5.00%。</p><h3>上級ドラフト</h3><p>クロスサーバーモードで、ルームが6人で満員になると開始できます。毎日10:00-12:00・18:00-20:00に開放。A・S・SSクラスの選手と契約できます。確率：Aクラス75.00%・Sクラス20.00%・SSクラス5.00%。</p>"
      },
      "ko": {
        "title": "드래프트 종류",
        "body": "<h3>드래프트 종류</h3><p>기본 드래프트와 고급 드래프트 2가지가 있습니다. 두 드래프트로 획득한 선수 카드에는 모두 클럽 위탁 표시가 붙어 있으며, 클럽 마켓에서 위탁 거래를 할 수 있습니다.</p><h3>기본 드래프트</h3><p>동일 서버 참가만 가능. 룸에 6명이 모이면 시작할 수 있습니다. C·B·A·S·SS급 선수와 계약할 수 있습니다. 확률：C급26.43%·B급26.43%·A급26.89%·S급15.25%·SS급5.00%.</p><h3>고급 드래프트</h3><p>크로스 서버 모드. 룸에 6명이 모이면 시작할 수 있습니다. 매일 10:00-12:00·18:00-20:00에 개방됩니다. A·S·SS급 선수와 계약할 수 있습니다. 확률：A급75.00%·S급20.00%·SS급5.00%.</p>"
      }
    }
  },
  {
    "id": "talent-scout",
    "category": "抽卡相关",
    "tags": [
      "星探",
      "魅力值",
      "引援",
      "升级"
    ],
    "content": {
      "zh": {
        "title": "星探",
        "body": "<h3>一、星探等級</h3><p>星探一共五個等級（業餘→職業→精英→資深→王牌），隨著不斷透過招募會循序漸進升級。</p><h3>二、升級方式</h3><p>透過簽約球員獲得魅力值，魅力值累計提升星探等級。</p><h3>三、簽約魅力值一覽</h3><ul><li>C級：3點</li><li>B級：8點</li><li>A級：25點</li><li>S級：100點</li><li>SS級：200點</li><li>SR級：400點</li></ul><h3>四、引援時間</h3><p>每日 4:00 / 12:00 / 20:00 刷新一批球員，建議準時簽約。</p><h3>五、等級收益</h3><p>星探等級越高，刷新出的球員品質越高，單次引援球員數量也越多。</p>"
      },
      "en": {
        "title": "Talent Scout",
        "body": "<h3>I. Talent Scout Levels</h3><p>There are 5 Talent Scout levels in total (Amateur → Professional → Elite → Senior → Ace). Your level progresses steadily as you continue signing players through recruitment.</p><h3>II. How to Level Up</h3><p>Earn Charm Points by signing players. Accumulating Charm Points will raise your Talent Scout level.</p><h3>III. Charm Points per Signing</h3><ul><li>Grade C: 3 pts</li><li>Grade B: 8 pts</li><li>Grade A: 25 pts</li><li>Grade S: 100 pts</li><li>Grade SS: 200 pts</li><li>Grade SR: 400 pts</li></ul><h3>IV. Recruitment Refresh Times</h3><p>A new batch of players refreshes daily at 04:00 / 12:00 / 20:00 (UTC+8). Sign them promptly - don't miss your window.</p><h3>V. Level Benefits</h3><p>The higher your Talent Scout level, the better the quality of players that appear in each refresh - and the more players you can sign per recruitment session.</p>"
      },
      "ja": {
        "title": "エージェント",
        "body": "<h3>一、エージェントレベル</h3><p>スカウトには全5段階のレベルがあり、リクルートを続けることで段階的にレベルが上がります。</p><h3>二、レベルアップ方法</h3><p>選手との契約でカリスマ値を獲得し、カリスマ値が累積するとスカウトレベルが上がります。</p><h3>三、契約カリスマ値一覧</h3><ul><li>Cクラス：3ポイント</li><li>Bクラス：8ポイント</li><li>Aクラス：25ポイント</li><li>Sクラス：100ポイント</li><li>SSクラス：200ポイント</li><li>SRクラス：400ポイント</li></ul><h3>四、選手獲得時間</h3><p>毎日 4:00 / 12:00 / 20:00 （UTC+8）に新しい選手がリフレッシュされます。</p><h3>五、レベル別特典</h3><p>スカウトレベルが高いほど、リフレッシュされる選手の品質が高く、1回の獲得人数も増えます。</p>"
      },
      "ko": {
        "title": "스카우터",
        "body": "<h3>1. 스카우터 레벨</h3><p>스카우터에는 총 5단계 레벨이 있으며, 지속적인 영입을 통해 단계적으로 레벨이 오릅니다.</p><h3>2. 레벨 업 방법</h3><p>선수 계약으로 매력치를 획득하며, 매력치가 누적되면 스카우터 레벨이 올라갑니다.</p><h3>3. 계약 매력치 목록</h3><ul><li>C급：3포인트</li><li>B급：8포인트</li><li>A급：25포인트</li><li>S급：100포인트</li><li>SS급：200포인트</li><li>SR급：400포인트</li></ul><h3>4. 선수 영입 시간</h3><p>매일 4:00 / 12:00 / 20:00에 새 선수진이 새로고침됩니다. 제때 계약하는 것을 권장합니다.</p><h3>5. 레벨별 혜택</h3><p>스카우터 레벨이 높을수록 새로고침되는 선수의 품질이 높아지고, 1회 영입 선수 수도 늘어납니다.</p>"
      }
    }
  },
  {
    "id": "player-rank-up",
    "category": "球员养成",
    "tags": [
      "升星",
      "成功率",
      "材料",
      "同名球员"
    ],
    "content": {
      "zh": {
        "title": "球員升星",
        "body": "<p>球員預設星級為0，可消耗達到品質的球員提升星級，升星有成功率，無論成敗均扣除消耗球員。</p><h3>升星素材</h3><table><tr><th>目標品質</th><th>可添加材料</th></tr><tr><td>C</td><td>C級球員</td></tr><tr><td>B</td><td>C、B級球員</td></tr><tr><td>A</td><td>B、A級球員</td></tr><tr><td>S</td><td>A、S級球員</td></tr><tr><td>SS</td><td>S、SS級球員</td></tr><tr><td>SR</td><td>SS、SR級球員</td></tr><tr><td>SL</td><td>SR、SL級球員</td></tr></table><p>消耗球員品質、星級越高，升星成功率越高；同名球員可額外提升成功率；升星卡可用於傳奇球員升星，且額外提升成功率；帶有寄售標識的球員升星後，標識將保留。</p><h3>不可升星情況</h3><p>先發、替補、助陣、巡演、鎖定及正在晉升、特訓中的球員，不可作為升星消耗材料；每日14:55-15:05數據更新期間，無法進行升星操作。</p>"
      },
      "en": {
        "title": "Player Rank Up",
        "body": "<p>Players start at a default rank of 0 Stars. You may consume players of the matching grade to attempt a Rank Up. Each attempt has a success rate - regardless of whether the attempt succeeds or fails, the consumed players will be deducted.</p><h3>Rank Up Materials</h3><table><tr><th>Target Grade</th><th>Available Materials</th></tr><tr><td>C</td><td>Grade C players</td></tr><tr><td>B</td><td>Grade C, B players</td></tr><tr><td>A</td><td>Grade B, A players</td></tr><tr><td>S</td><td>Grade A, S players</td></tr><tr><td>SS</td><td>Grade S, SS players</td></tr><tr><td>SR</td><td>Grade SS, SR players</td></tr><tr><td>SL</td><td>Grade SR, SL players</td></tr></table><p>The higher the grade and star rank of the consumed player, the higher the Rank Up success rate. Using a player with the same name grants an additional success rate bonus. Rank Up Cards can be used for Legend Players. Players with a Guild Resale Tag will retain their tag after a successful Rank Up.</p><h3>Rank Up Not Available</h3><p>Players currently assigned as Starter, Bench, Support, Tour, or Locked, or those undergoing Promotion or Special Training, cannot be used as Rank Up material. Rank Up is unavailable during the daily data update period: 14:55-15:05 (UTC+8).</p>"
      },
      "ja": {
        "title": "選手の星上げ",
        "body": "<p>選手のデフォルトの星は0です。対応する品質の選手を消費して星を上げられます。星上げには成功率があり、成功・失敗にかかわらず消費した選手は差し引かれます。</p><h3>星上げ素材</h3><table><tr><th>目標品質</th><th>追加可能素材</th></tr><tr><td>C</td><td>Cクラスの選手</td></tr><tr><td>B</td><td>C・Bクラスの選手</td></tr><tr><td>A</td><td>B・Aクラスの選手</td></tr><tr><td>S</td><td>A・Sクラスの選手</td></tr><tr><td>SS</td><td>S・SSクラスの選手</td></tr><tr><td>SR</td><td>SS・SRクラスの選手</td></tr><tr><td>SL</td><td>SR・SLクラスの選手</td></tr></table><p>消費する選手の品質・星数が高いほど成功率が上がります；同名選手を使用すると成功率がさらに上昇します。</p><h3>星上げ不可の状況</h3><p>先発・控え・サポート・ツアー・ロック中、および昇格・特訓中の選手は消費素材として使用できません；毎日14:55～15:05（UTC+8）のデータ更新時間中は星上げ操作を行えません。</p>"
      },
      "ko": {
        "title": "성급 상승",
        "body": "<p>선수 기본 성급은 0이며, 품질에 부합하는 선수를 소모하여 성급을 높일 수 있습니다. 성급 상승에는 성공 확률이 존재하며, 성공 여부와 관계없이 소모한 선수는 차감됩니다.</p><h3>성급 상승 소재</h3><table><tr><th>목표 등급</th><th>추가 가능 소재</th></tr><tr><td>C등급</td><td>C등급 선수</td></tr><tr><td>B등급</td><td>C, B등급 선수</td></tr><tr><td>A등급</td><td>B, A등급 선수</td></tr><tr><td>S등급</td><td>A, S등급 선수</td></tr><tr><td>SS등급</td><td>S, SS등급 선수</td></tr><tr><td>SR등급</td><td>SS, SR등급 선수</td></tr><tr><td>SL등급</td><td>SR, SL등급 선수</td></tr></table><p>소모하는 선수의 품질 및 성급이 높을수록 성공 확률이 상승하며, 동명 선수 사용 시 추가로 성공 확률이 상승합니다.</p><h3>성급 상승 불가 경우</h3><p>선발, 교체, 지원, 순회, 잠금 상태이거나 승격·특훈 중인 선수는 소재로 사용할 수 없습니다. 매일 14:55~15:05（UTC+8）데이터 업데이트 기간에는 성급 상승 작업을 진행할 수 없습니다.</p>"
      }
    }
  },
  {
    "id": "player-promotion",
    "category": "球员养成",
    "tags": [
      "晋升",
      "同名球员",
      "重置",
      "交易"
    ],
    "content": {
      "zh": {
        "title": "球員晉升",
        "body": "<h3>晉升等級</h3><p>球員初始晉升等級為0級，可消耗同名球員+指定材料提升晉升等級；陣容與倉庫球員均可晉升，晉升後不影響交易綁定狀態。</p><h3>材料</h3><p>陣容中/助陣/巡演/鎖定中的球員不可作為晉升材料消耗；已經升星、晉升、特訓培養過的球員不可作為晉升材料消耗；已晉升球員可使用［晉升重置券］進行重置，等級回歸初始，並100%返還已消耗的球員與材料。</p><h3>交易</h3><p>晉升不會影響球員可否交易的狀態。</p>"
      },
      "en": {
        "title": "Player Promotion",
        "body": "<h3>Promotion Levels</h3><p>Players start at a default Promotion level of Level 0. You may consume players of the same name along with designated materials to raise the Promotion level. Both Lineup and Roster players are eligible for Promotion. Promotion does not affect a player's trade or binding status.</p><h3>Materials</h3><p>Players currently assigned as Lineup, Assist, Tour, or Locked cannot be used as Promotion material. Players who have previously undergone Rank Up, Promotion, or S.Training cannot be used as Promotion material. Promoted players can be reset using a Promotion Reset Ticket, reverting them to Level 0. All consumed players and materials are returned at a 100% rate upon reset.</p><h3>Trading</h3><p>Promotion does not affect a player's tradability status.</p>"
      },
      "ja": {
        "title": "選手進化",
        "body": "<h3>進化レベル</h3><p>選手の初期進化レベルは0です。同名選手＋指定素材を消費して進化レベルを上げられます；ロスター内・倉庫内の選手いずれも進化可能。進化後も取引バインド状態には影響しません。</p><h3>素材</h3><p>ロスター内/サポート/ツアー/ロック中の選手は進化素材として消費できません；星上げ・進化・特訓で育てた選手は進化素材として消費できません；進化済みの選手には「進化リセット券」を使用してリセットでき、レベルが初期値に戻り、消費した選手と素材が100%返還されます。</p><h3>取引</h3><p>進化は選手の取引可否の状態には影響しません。</p>"
      },
      "ko": {
        "title": "승급",
        "body": "<h3>승급 레벨</h3><p>선수 초기 승급 레벨은 0이며, 동명 선수+지정 재료를 소모하여 승급 레벨을 올릴 수 있습니다. 라인업 및 창고 선수 모두 승급 가능하며, 승급 후 거래 귀속 상태에 영향을 주지 않습니다.</p><h3>재료</h3><p>라인업/서포트/투어/잠금 중인 선수는 승급 재료로 사용할 수 없습니다. 이미 성급 상승, 승급, 특훈을 진행한 선수는 승급 재료로 사용할 수 없습니다. 승급한 선수는 [승급 초기화 티켓]을 사용하여 초기화할 수 있으며, 레벨이 초기 상태로 돌아가고 소모한 선수와 재료가 100% 반환됩니다.</p><h3>거래</h3><p>승급은 선수의 거래 가능 여부에 영향을 주지 않습니다.</p>"
      }
    }
  },
  {
    "id": "player-training",
    "category": "球员养成",
    "tags": [
      "特训",
      "能力卡",
      "重置",
      "资金"
    ],
    "content": {
      "zh": {
        "title": "球員特訓",
        "body": "<h3>消耗</h3><p>每名球員最多特訓30次，需消耗同能力值球員/能力卡+資金。倉庫與陣容球員均可特訓，先發、替補、鎖定、助陣、巡演和有過升星/晉升球員不可作為材料。進行特訓不會影響綁定/解綁狀態。</p><h3>重置相關</h3><p>已特訓球員可用特訓重置券重置，恢復初始狀態，重置返還1張能力值-1的能力卡，不退還消耗資金。</p>"
      },
      "en": {
        "title": "Player Training",
        "body": "<h3>Costs</h3><p>Each player can undergo Special Training up to 30 times. Each session requires consuming a player or Ability Card of the matching Ability Value, along with Funds. Players in both the Roster and Lineup are eligible for Special Training. However, players currently assigned as Starter, Bench, Locked, Support, or Tour, as well as any player who has previously undergone a Rank Up or Promotion, cannot be used as training material.</p><h3>Reset</h3><p>Players who have undergone Special Training can be reset using a Training Reset Voucher, restoring them to their initial state. Upon reset, 1 Ability Card with an Ability Value reduced by 1 will be returned. Funds spent are non-refundable.</p>"
      },
      "ja": {
        "title": "選手特訓",
        "body": "<h3>消費</h3><p>各選手は最大30回まで特訓可能。同能力値の選手/能力カード＋資金を消費します。倉庫・ロスターの選手いずれも特訓可能。先発・控え・ロック・サポート・ツアー中の選手や、星上げ/昇格済みの選手は素材として使用できません。</p><h3>リセット関連</h3><p>特訓済みの選手は「特訓リセット券」を使用してリセットし、初期状態に戻せます。リセット時に能力値-1の能力カードが1枚返還されますが、消費した資金は返還されません。</p>"
      },
      "ko": {
        "title": "선수 특훈",
        "body": "<h3>소모</h3><p>각 선수는 최대 30회 특훈 가능. 동일 능력치 선수/능력 카드＋자금을 소모합니다. 창고·라인업 선수 모두 특훈 가능. 선발·후보·잠금·지원·투어 중인 선수나, 별 올리기/승급한 선수는 소재로 사용할 수 없습니다.</p><h3>초기화 관련</h3><p>특훈된 선수는 「특훈 초기화 티켓」을 사용하여 초기 상태로 되돌릴 수 있습니다. 초기화 시 능력치-1 능력 카드 1장이 반환되지만, 소모한 자금은 반환되지 않습니다.</p>"
      }
    }
  },
  {
    "id": "player-enhance",
    "category": "球员养成",
    "tags": [
      "强化",
      "进阶",
      "魂石",
      "合同"
    ],
    "content": {
      "zh": {
        "title": "球員強化",
        "body": "<h3>強化</h3><p>球員強化共分為5種：進攻強化、防守強化、技巧強化、對抗強化、意識強化。強化需按順序進行，完成前一項強化提升後，方可解鎖並進行下一項強化。強化需消耗強化合約與資金。僅處於先發、替補狀態的球員可進行強化操作。</p><h3>進階</h3><p>當5種強化類型皆培養至滿級後，可進行球員進階；進階需消耗強化合約與進階魂石。</p><h3>球員進階所需材料</h3><table><tr><th>階段</th><th>強化合約</th><th>進階魂石</th></tr><tr><td>1階</td><td>600</td><td>100</td></tr><tr><td>2階</td><td>1,200</td><td>250</td></tr><tr><td>3階</td><td>2,400</td><td>500</td></tr><tr><td>4階</td><td>4,400</td><td>1,000</td></tr><tr><td>5階</td><td>6,600</td><td>2,000</td></tr></table>"
      },
      "en": {
        "title": "Player Enhance",
        "body": "<h3>Enhance</h3><p>Player Enhance is divided into 5 types: Offensive Enhance, Defensive Enhance, Skill Enhance, Physicality Enhance, and Awareness Enhance. Enhancements must be completed in sequence. The next enhancement type is unlocked only after the previous one is fully upgraded. Enhancing consumes Enhancement Contracts and Funds. Only players in Starting Lineup or Bench status are eligible for Enhancement.</p><h3>Advance</h3><p>Once all 5 Enhance types have been maxed out, the player can undergo Advance. Advance consumes Enhancement Contracts and Rank-up Soulstones.</p><h3>Advance Material Requirements</h3><table><tr><th>Stage</th><th>Contracts</th><th>Soulstones</th></tr><tr><td>Stage 1</td><td>600</td><td>100</td></tr><tr><td>Stage 2</td><td>1,200</td><td>250</td></tr><tr><td>Stage 3</td><td>2,400</td><td>500</td></tr><tr><td>Stage 4</td><td>4,400</td><td>1,000</td></tr><tr><td>Stage 5</td><td>6,600</td><td>2,000</td></tr></table>"
      },
      "ja": {
        "title": "選手強化",
        "body": "<h3>強化</h3><p>選手の強化は全5種類：攻撃強化・守備強化・スキル強化・対抗強化・認識強化。強化は順番通りに行う必要があり、前の強化を完了してから次の強化を解放・実行できます。強化には強化契約と資金を消費します。先発・控えの状態にある選手のみ強化できます。</p><h3>進化</h3><p>5種類すべての強化を最大レベルまで育成した後、選手の進化が可能になります。進化には強化契約と進化ソウルストーンを消費します。</p><h3>選手進化に必要な素材</h3><table><tr><th>段階</th><th>強化契約</th><th>進化ソウルストーン</th></tr><tr><td>1段階</td><td>600</td><td>100</td></tr><tr><td>2段階</td><td>1,200</td><td>250</td></tr><tr><td>3段階</td><td>2,400</td><td>500</td></tr><tr><td>4段階</td><td>4,400</td><td>1,000</td></tr><tr><td>5段階</td><td>6,600</td><td>2,000</td></tr></table>"
      },
      "ko": {
        "title": "선수 강화",
        "body": "<h3>강화</h3><p>선수 강화는 총 5종류：공격 강화·수비 강화·기술 강화·대결 강화·인식 강화. 강화는 순서대로 진행해야 하며, 이전 강화를 완료한 후 다음 강화를 해금하고 진행할 수 있습니다. 강화에는 강화 계약과 자금을 소모합니다. 선발·후보 상태의 선수만 강화할 수 있습니다.</p><h3>진화</h3><p>5종류 모든 강화를 최대 레벨까지 육성한 후, 선수 진화가 가능합니다. 진화에는 강화 계약과 진화 소울스톤을 소모합니다.</p><h3>선수 진화에 필요한 소재</h3><table><tr><th>단계</th><th>강화 계약</th><th>진화 소울스톤</th></tr><tr><td>1단계</td><td>600</td><td>100</td></tr><tr><td>2단계</td><td>1,200</td><td>250</td></tr><tr><td>3단계</td><td>2,400</td><td>500</td></tr><tr><td>4단계</td><td>4,400</td><td>1,000</td></tr><tr><td>5단계</td><td>6,600</td><td>2,000</td></tr></table>"
      }
    }
  },
  {
    "id": "player-gear",
    "category": "球员养成",
    "tags": [
      "装备",
      "升级",
      "融合",
      "洗炼",
      "套装"
    ],
    "content": {
      "zh": {
        "title": "球員裝備",
        "body": "<p>裝備共7檔品質、5類部位（頭帶、球衣、球褲、護膝、球鞋）；穿戴中裝備可升級提升屬性，升級消耗布料與資金；紫色品質及以上裝備有套裝屬性，3件、5件可激活套裝效果。</p><h3>裝備提升</h3><p><strong>升階：</strong>消耗裝備碎片可以進行升階提升星級與等級上限，品質越高星級上限越高；<strong>融合：</strong>用兩件同品質同部位裝備可融合出更高品質裝備，橙色及以上融合需額外消耗對應品質/部位的圖紙。</p><h3>洗煉</h3><p>紫色及以上裝備可洗煉，消耗洗煉石可生成隨機詞條，詞條數量隨品質提升（精良=1條、稀有&史詩=2條、傳說=3條、傳奇=4條）；詞條品級分為5種（一般→高級→罕見→稀有→極品），當詞條為2條及以上時可鎖定，鎖定詞條洗煉需額外鑽石。</p>"
      },
      "en": {
        "title": "Player Gear",
        "body": "<p>Gear comes in 7 quality tiers and 5 equipment slots (Headband, Jersey, Shorts, Knee Pads, Shoes). Equipped gear can be upgraded to boost stats. Upgrading consumes Cloth and Funds. Purple quality and above gear has Set Bonuses. Equipping 3 pieces or 5 pieces of the same set activates the set effect.</p><h3>Gear Enhancement</h3><p><strong>Advance:</strong> Consume Gear Shards to advance gear, increasing its star rank and level cap. <strong>Fuse:</strong> Fuse 2 pieces of gear of the same quality and same slot to create a higher-quality piece. Orange quality and above requires an additional Blueprint.</p><h3>Refine</h3><p>Purple quality and above gear can be refined. Consuming Refine Stones generates random affixes. The number of affixes increases with gear quality. Affixes come in 5 grade tiers. When a gear has 2 or more affixes, affixes can be locked. Refining with locked affixes requires additional Diamonds.</p>"
      },
      "ja": {
        "title": "選手装備",
        "body": "<p>装備は全7段階の品質・5種類の部位；装着中の装備はアップグレードで属性を強化でき、アップグレードには布地と資金を消費します；紫品質以上の装備にはセット属性があり、3個・5個で装備セット効果を発動できます。</p><h3>装備強化</h3><p><strong>昇格：</strong>装備の欠片を消費して昇格でき、星数と等級上限が上昇します；<strong>合成：</strong>同じ品質・同じ部位の装備2個を合成してより高品質な装備を作れます。</p><h3>錬成</h3><p>紫以上の装備に錬成を行えます。錬成石を消費することでランダムな付加属性が生成され、品質が上がるほど付加属性の数が増えます。付加属性のランクは5種類あり、2個以上ある場合にロック可能です。</p>"
      },
      "ko": {
        "title": "선수 장비",
        "body": "<p>장비는 총 7단계 품질·5종류 부위；착용 중인 장비는 업그레이드로 능력치를 강화할 수 있으며, 업그레이드에는 천과 자금을 소모합니다；보라색 품질 이상의 장비에는 세트 속성이 있으며, 3개·5개 착용 시 세트 효과를 발동할 수 있습니다.</p><h3>장비 강화</h3><p><strong>승급：</strong>장비 파편을 소모하여 승급할 수 있으며, 별 수와 등급 상한이 올라갑니다；<strong>합성：</strong>같은 품질·같은 부위의 장비 2개를 합성하여 더 높은 품질의 장비를 만들 수 있습니다.</p><h3>세공</h3><p>보라색 이상의 장비에 세공을 할 수 있습니다. 세공석을 소모하면 무작위 접두 속성이 생성되며, 품질이 높아질수록 접두 속성 수가 늘어납니다. 접두 속성의 등급은 5종류가 있으며, 2개 이상일 때 잠금이 가능합니다.</p>"
      }
    }
  },
  {
    "id": "player-badge",
    "category": "球员养成",
    "tags": [
      "徽章",
      "合成",
      "保护卡",
      "孔位"
    ],
    "content": {
      "zh": {
        "title": "球員徽章",
        "body": "<p>徽章孔位隨球員等級解鎖，最多可穿戴7枚，同類型最多3枚。</p><h3>徽章合成</h3><p>2枚同類型同等級徽章可合成更高等級徽章（存在機率成功或者失敗）；合成成功：獲得高級徽章，扣除2枚低級徽章；合成失敗：不獲得高級徽章，扣除1枚低級徽章；使用保護卡後，成敗均扣卡，失敗不扣徽章。</p>"
      },
      "en": {
        "title": "Player Badge",
        "body": "<p>Badge slots are unlocked as the player's level increases. A maximum of 7 Badges can be equipped, with up to 3 Badges of the same type allowed.</p><h3>Badge Fusion</h3><p>Fusing 2 Badges of the same type and same tier can produce a higher-tier Badge (success is not guaranteed). Fusion Success: A higher-tier Badge is obtained; both lower-tier Badges are consumed. Fusion Failure: No higher-tier Badge is obtained; 1 lower-tier Badge is consumed. With a Protection Card: The card is consumed regardless of outcome, but no Badges are lost on failure.</p>"
      },
      "ja": {
        "title": "選手バッジ",
        "body": "<p>バッジスロットは選手のレベルに応じて解放され、最大7個装着可能。同じ種類は最大3個まで。</p><h3>バッジ合成</h3><p>同じ種類・同じ等級のバッジ2個を合成してより高い等級のバッジを作れます（成功または失敗の確率あり）；合成成功：上位バッジを獲得し、2個の下位バッジが差し引かれます；合成失敗：上位バッジは獲得できず、1個の下位バッジが差し引かれます；プロテクトカード使用後は成功・失敗いずれもカードが消費され、失敗時にバッジは差し引かれません。</p>"
      },
      "ko": {
        "title": "선수 배지",
        "body": "<p>배지 슬롯은 선수 레벨에 따라 해금되며, 최대 7개 착용 가능. 같은 유형은 최대 3개까지.</p><h3>배지 합성</h3><p>같은 유형·같은 등급의 배지 2개를 합성하여 더 높은 등급의 배지를 만들 수 있습니다（성공 또는 실패 확률 있음）；합성 성공：상위 배지를 획득하며, 하위 배지 2개가 차감됩니다；합성 실패：상위 배지를 획득하지 못하며, 하위 배지 1개가 차감됩니다；보호 카드 사용 시 성공·실패 모두 카드가 소모되며, 실패 시 배지는 차감되지 않습니다.</p>"
      }
    }
  },
  {
    "id": "player-ring",
    "category": "球员养成",
    "tags": [
      "戒指",
      "护佑",
      "特殊属性",
      "槽位"
    ],
    "content": {
      "zh": {
        "title": "戒指說明",
        "body": "<h3>種類</h3><p>戒指共5類、4種品質，類型不同屬性不同，佩戴後為球員提供對應屬性加成。</p><h3>佩戴方式</h3><p>首發和替補球員可佩戴一枚主戒指，佩戴時可享受加成效果；替換球員時主戒將自動繼承給新球員。</p><h3>護佑</h3><p>佩戴橙色及以上品質戒指，可開啟額外附屬戒指槽位，現役球員為1個額外槽位，傳奇球員為2個額外槽位；額外槽位可安裝紫色及以上品質戒指，戒指的星級、等級越高，屬性加成越高。</p><h3>特殊屬性</h3><p>只有紅色品質以上的戒指才有特殊屬性；紅色戒指（主要槽位）的特殊屬性只要佩戴會一直生效；在佩戴紅色戒指（主要槽位）後，額外槽位佩戴紅色+金色戒指，可激活第二個紅色戒指（額外槽位）的特殊屬性；假設激活的兩個特殊屬性相同，則不疊加，僅生效一個。</p>"
      },
      "en": {
        "title": "Ring Instructions",
        "body": "<h3>Types</h3><p>There are 5 types and 4 quality tiers of rings. Different types grant different attributes, which provide corresponding attribute bonuses to players when equipped.</p><h3>Equipping Rules</h3><p>Starting and bench players can equip one Main Ring to gain its bonus effects. When substituting players, the Main Ring will be automatically inherited by the incoming player.</p><h3>Blessing Slot</h3><p>Equipping an Orange or higher quality ring unlocks additional accessory slots: Active players unlock 1 extra slot, while Legendary players unlock 2 extra slots. Extra slots can only be fitted with Purple or higher quality rings.</p><h3>Special Attributes</h3><p>Only Red or higher quality rings possess special attributes. The special attribute of a Red ring in the main slot remains active continuously once equipped. After equipping a Red ring in the main slot, equipping both a Red and a Gold ring in the extra slots will activate the special attribute of the second Red ring. If the two activated special attributes are identical, they do not stack; only one will take effect.</p>"
      },
      "ja": {
        "title": "リング説明",
        "body": "<h3>種類</h3><p>リングは全5種類・4段階の品質があります。種類によって属性が異なり、装着すると選手に対応する属性ボーナスが付与されます。</p><h3>装着方法</h3><p>先発と控えの選手はメインリングを1個装着でき、装着中はボーナス効果が適用されます；選手を交代した際、メインリングは新しい選手に自動継承されます。</p><h3>護佑</h3><p>オレンジ以上の品質のリングを装着すると、追加の副スロットが解放されます。現役選手は1スロット追加、伝説選手は2スロット追加。</p><h3>特殊属性</h3><p>赤品質以上のリングのみ特殊属性を持ちます；赤いリング（メインスロット）の特殊属性は装着中は常に効果があります；赤いリング装着後、副スロットに赤＋金のリングを装着すると、2枚目の赤いリングの特殊属性を発動できます；発動した2つの特殊属性が同じ場合は重複しません。</p>"
      },
      "ko": {
        "title": "반지 설명",
        "body": "<h3>종류</h3><p>반지는 총 5종류·4단계 품질이 있습니다. 종류에 따라 속성이 다르며, 착용 시 선수에게 해당 속성 보너스가 부여됩니다.</p><h3>착용 방법</h3><p>선발과 후보 선수는 메인 반지 1개를 착용할 수 있으며, 착용 중에는 보너스 효과가 적용됩니다；선수를 교체할 때 메인 반지는 새로운 선수에게 자동으로 계승됩니다.</p><h3>수호</h3><p>오렌지 이상의 품질 반지를 착용하면 추가 부속 슬롯이 해금됩니다. 현역 선수는 슬롯 1개 추가, 레전드 선수는 슬롯 2개 추가.</p><h3>특수 속성</h3><p>빨간색 품질 이상의 반지에만 특수 속성이 있습니다；빨간 반지（메인 슬롯）의 특수 속성은 착용 중에는 항상 효과가 발동됩니다；빨간 반지 착용 후, 부속 슬롯에 빨간＋금색 반지를 착용하면 두 번째 빨간 반지의 특수 속성을 발동할 수 있습니다；발동된 두 특수 속성이 같은 경우 중첩되지 않으며, 하나만 적용됩니다.</p>"
      }
    }
  }
];
