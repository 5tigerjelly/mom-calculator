import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			준비시간: 0,
			시간: 0,
			인원: 0,
			재료비: 0,
			is단체재료비: false,
			배송료: 0,
			물감재료비: 0,
			is단체물감재료비: false,
			보조재: 0,
			붓: 0,
			보조강사비: 0,
			교통비: 0,
			식비: 0,
			세금: 0,
			홍보비용: 0,
			시급: 0,
			준비시급: 0
		}
	}

	handleSubmit(evt) {
		evt.preventDefault();
		let s = this.state;
		let 참가인원 = s.인원;
		let 예상순수익 = s.시간 * s.시급 + s.준비시간 * s.준비시급;
		let 일인당원가 = 0;
		let 단체원가 = 0;
		if (s.is단체재료비) {
			단체원가 += s.재료비;
		} else {
			일인당원가 += s.재료비;
		}
		if (s.is단체물감재료비) {
			단체원가 += s.물감재료비;
		} else {
			일인당원가 += s.물감재료비;
		}
		let 기타비용 = s.교통비 + s.배송료 + s.보조강사비 + s.식비 + s.홍보비용 + s.붓;
		let 총계 = 일인당원가 * 참가인원 + 기타비용 + 예상순수익 + 단체원가;
		let 세금 = Math.ceil(총계 * 0.0396);
		let 총결제금액 = 총계 + 세금;
		let 일인참가비용 = Math.ceil(총결제금액 / 참가인원);
		this.setState({
			계산: {
				일인당원가: 일인당원가,
				기타비용: 기타비용,
				총계: 총계,
				세금: 세금,
				총결제금액: 총결제금액,
				일인참가비용: 일인참가비용
			}
		});
	}

	render() {
		console.log(this.state.시간);
		return (
			<div className="container pt-1">
				<h1 className="display-4">청구 비용 / 원가 계산기</h1>
				<form className="card-columns" autoComplete="off" onSubmit={evt => this.handleSubmit(evt)}>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">시급</label>
								<input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="시급" onInput={evt => this.setState({ 시급: parseInt(evt.target.value ? evt.target.value : 0, 10) })

								} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">준비 시급</label>
								<input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="준비시급" onInput={evt => this.setState({ 준비시급: parseInt(evt.target.value ? evt.target.value : 0, 10) })

								} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">참가자 인원</label>
								<input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="참가자 인원" onInput={evt => this.setState({ 인원: parseInt(evt.target.value ? evt.target.value : 0, 10) })

								} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">업무 총 시간</label>
								<input type="number" step="any" className="form-control" id="exampleInputPassword1" placeholder="업무 총 시간" onInput={evt => this.setState({ 시간: parseFloat(evt.target.value ? evt.target.value : 0) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">준비 시간</label>
								<input type="number" step="any" className="form-control" id="exampleInputPassword1" placeholder="준비 시간" onInput={evt => this.setState({ 준비시간: parseFloat(evt.target.value ? evt.target.value : 0) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">재료비</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="재료비" onInput={evt => this.setState({ 재료비: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" onChange={evt => this.setState({ is단체재료비: evt.target.checked })} />
									단체 재료비
    					</label>
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">물감재료비</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="물감재료비" onInput={evt => this.setState({ 물감재료비: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" onChange={evt => this.setState({ is단체물감재료비: evt.target.checked })} />
									단체 재료비
    					</label>
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">보조재</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="보조재" onInput={evt => this.setState({ 보조재: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">붓</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="붓" onInput={evt => this.setState({ 붓: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">배송료</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="배송료" onInput={evt => this.setState({ 배송료: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">보조강사비</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="보조강사비" onInput={evt => this.setState({ 보조강사비: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">교통비</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="교통비" onInput={evt => this.setState({ 교통비: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">식비</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="식비" onInput={evt => this.setState({ 식비: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<div className="card p-3">
						<div className="card-block">
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">홍보비용</label>
								<input type="number" className="form-control" id="exampleInputPassword1" placeholder="홍보비용" onInput={evt => this.setState({ 홍보비용: parseInt(evt.target.value ? evt.target.value : 0, 10) })} />
							</div>
						</div>
					</div>
					<button type="submit" className="btn btn-primary btn-block">Submit</button>
				</form>
				{
					this.state.계산 ?
						<table className="table">
							<tbody>
								<tr>
									<td>일인당원가</td>
									<td>{this.state.계산.일인당원가}</td>
								</tr>
								<tr>
									<td>기타비용</td>
									<td>{this.state.계산.기타비용}</td>

								</tr>
								<tr>
									<td>총계</td>
									<td>{this.state.계산.총계}</td>
								</tr>
								<tr>
									<td>세금</td>
									<td>{this.state.계산.세금}</td>
								</tr>
								<tr>
									<td>총결제금액</td>
									<td>{this.state.계산.총결제금액}</td>
								</tr>
								<tr>
									<td>일인참가비용</td>
									<td>{this.state.계산.일인참가비용}</td>
								</tr>
							</tbody>
						</table>
						: undefined
				}
				<footer className="text-center pt-5">
					<p>Made By : <a href="mailto:bmo5@uw.edu">
						5tigerjelly</a></p>
				</footer>
			</div >
		);
	}
}

export default App;
