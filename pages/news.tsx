import { PageLayout } from "@/components/layouts/PageLayout";
import SubTitle from "@/components/layouts/subTitle";

export default function news(){
    return(
        <>
    <PageLayout>
        <SubTitle className="sub_title" title="グッドJOB INFO"/>
        <dl className="news_lists">
            <dl>
            <dt>2023/01/01</dt>
            <dd>おっパピーパイピーパピ杯ちんぽコリンこりい</dd>
            </dl>
            <dl>
            <dt>2023/01/01</dt>
            <dd>おっパピーパイピーパピ杯ちんぽコリンこりい</dd>
            </dl>
            <dl>
            <dt>2023/01/01</dt>
            <dd>おっパピーパイピーパピ杯ちんぽコリンこりい</dd>
            </dl>
        </dl>
    </PageLayout>
        </>
    )
}